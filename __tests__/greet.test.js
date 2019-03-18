'use strict';

const greet = require('../lib/greet.js');

describe('Greet', () => {

    it('Returns null if passed is not a string', () => {
        let message = greet(123);
        let expectedOutput = null;
        expect(expectedOutput).toEqual(null);
    })

    it('return hello world when given world', () => {
        let message = greet('World');
        let expectedOutput = 'Hello World';
        expect(message).toEqual(expectedOutput);
    })

})

