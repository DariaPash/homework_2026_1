// Web 21 Пасхальная Дарья

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
const findUniqueProperties = function(obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        throw new TypeError('Arguments cannot be null');
    }
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        throw new TypeError('Arguments must be objects');
    }
    
    const result = {};
    
    for (let key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key) && 
            !Object.prototype.hasOwnProperty.call(obj2, key)) {
            result[key] = obj1[key];
        }
    }
    
    for (let key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key) && 
            !Object.prototype.hasOwnProperty.call(obj1, key)) {
            result[key] = obj2[key];
        }
    }
    
    return result;
};