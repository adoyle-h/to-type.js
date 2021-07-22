'use strict';

const {toType} = require('./index');

test('toType', () => {
    expect(toType('')).toBe('String');
    expect(toType([])).toBe('Array');
    expect(toType({})).toBe('Object');
    expect(toType(1)).toBe('Number');
    expect(toType()).toBe('Undefined');
    expect(toType(null)).toBe('Null');
});
