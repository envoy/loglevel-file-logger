"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultFormatter_1 = require("../defaultFormatter");
describe('defaultFormatter', () => {
    const now = new Date(1507164828273);
    it('formats strings', () => {
        expect(defaultFormatter_1.default('MyLogger', 'info', ['1st msg', '2nd msg'], () => now)).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg 2nd msg');
    });
    it('formats undefined', () => {
        expect(defaultFormatter_1.default('MyLogger', 'info', ['1st msg', undefined], () => now)).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg [object Undefined]');
    });
    it('formats null', () => {
        expect(defaultFormatter_1.default('MyLogger', 'info', ['1st msg', null], () => now)).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg [object Null]');
    });
    it('formats object', () => {
        expect(defaultFormatter_1.default('MyLogger', 'info', ['1st msg', { foo: 'bar' }], () => now)).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg {"foo":"bar"}');
    });
    it('formats numbers', () => {
        expect(defaultFormatter_1.default('MyLogger', 'info', ['1st msg', 1234], () => now)).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg 1234');
    });
});
