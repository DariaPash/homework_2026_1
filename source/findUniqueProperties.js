// Web 21 Пасхальная Дарья
'use strict';

/**
 * Функция, которая находит уникальные свойства в двух объектах
 * @param {Object} obj1 - первый объект для сравнения
 * @param {Object} obj2 - второй объект для сравнения
 * 
 * @example
 * // returns { a: 1, d: 5 }
 * findUniqueProperties({ a: 1, b: 2, c: 3 }, { b: 2, c: 4, d: 5 });
 * 
 * @example
 * // returns { x: 10, z: 30 }
 * findUniqueProperties({ x: 10, y: 20 }, { y: 20, z: 30 });
 * 
 * @example
 * // returns {}
 * findUniqueProperties({ a: 1, b: 2 }, { a: 1, b: 2 });
 * 
 * @returns {Object} 
 */
const findUniqueProperties = (obj1, obj2) => {
    if (obj1 === null || obj2 === null) {
        throw new TypeError('Arguments cannot be null');
    }
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        throw new TypeError('Arguments must be objects');
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const uniqueFromFirst = keys1.filter(key => !keys2.includes(key)).map(key => [key, obj1[key]]);
    const uniqueFromSecond = keys2.filter(key => !keys1.includes(key)).map(key => [key, obj2[key]]);
    
    return [...uniqueFromFirst, ...uniqueFromSecond].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};