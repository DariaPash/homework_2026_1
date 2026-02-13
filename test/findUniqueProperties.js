'use strict';

QUnit.module("Тестируем функцию findUniqueProperties", function() {
    QUnit.test("Работает правильно для объектов с уникальными свойствами", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2, c: 3 },
            { b: 2, c: 4, d: 5 }
        );

        assert.deepEqual(result, { a: 1, d: 5 }, "Должны быть уникальные свойства из обоих объектов.");
    });

    QUnit.test("Работает правильно для объекты с отсутствующими свойствами", function(assert) {
        const result = findUniqueProperties(
            { x: 10, y: 20 },
            { y: 20, z: 30 }
        );

        assert.deepEqual(result, { x: 10, z: 30 }, "Должны быть уникальные свойства x и z.");
    });

    QUnit.test("Работает правильно для идентичных объектов", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2 },
            { a: 1, b: 2 }
        );

        assert.deepEqual(result, {}, "Идентичные объекты должны вернуть пустой объект.");
    });
});

// Дополнительные тесты 
QUnit.test("Работает с вложенными объектами", function(assert) {
    const obj1 = { 
        a: 1, 
        b: { nested: 2 } 
    };
    const obj2 = { 
        a: 1, 
        c: { nested: 3 } 
    };
    const result = findUniqueProperties(obj1, obj2);
    
    assert.deepEqual(result, { 
        b: { nested: 2 }, 
        c: { nested: 3 } 
    }, "Должен корректно обрабатывать вложенные объекты");
});

QUnit.test("Работает с пустыми объектами", function(assert) {
    const obj1 = {};
    const obj2 = { a: 1, b: 2 };
    const result = findUniqueProperties(obj1, obj2);
    
    assert.deepEqual(result, { a: 1, b: 2 }, "Если первый объект пустой, возвращаются все свойства второго");
    
    const result2 = findUniqueProperties({ a: 1, b: 2 }, {});
    assert.deepEqual(result2, { a: 1, b: 2 }, "Если второй объект пустой, возвращаются все свойства первого");
});

QUnit.test("Работает с разными типами значений", function(assert) {
    const obj1 = { 
        num: 42, 
        str: "hello", 
        bool: true,
        nul: null,
        undef: undefined
    };
    const obj2 = { 
        num: 100, 
        arr: [1, 2, 3],
        bool: false
    };
    const result = findUniqueProperties(obj1, obj2);
    
    assert.deepEqual(result, { 
        str: "hello", 
        nul: null,
        undef: undefined,
        arr: [1, 2, 3]
    }, "Должен сохранять типы значений");
});
