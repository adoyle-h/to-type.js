'use strict';

const toString = Object.prototype.toString;

/**
 * @param {Any} x
 * @return {String} type
 */
exports.toType = function toType(x) {
    return toString.call(x).match(/^\[object ([a-zA-Z]+)\]$/)[1];
};
