'use strict';

const greet = require('../lib/greet.js');

describe('Greet', () => {

    describe('Returns null if passed not a typeof string', () => {

        it('Returns null if passed int', () => {
            let message = greet(123);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed bool true', () => {
            let message = greet(true);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed bool false', () => {
            let message = greet(false);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed null', () => {
            let message = greet(null);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed symbol', () => {
            const symbol = Symbol();
            let message = greet(symbol);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed array', () => {
            let message = greet([1,2,3]);
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
        it('Returns null if passed object', () => {            
            let message = greet({});
            let expectedOutput = null;
            expect(expectedOutput).toEqual(null);
        })
    })


    it('return hello world when given world', () => {
        let message = greet('World');
        let expectedOutput = 'Hello World';
        expect(message).toEqual(expectedOutput);
    })

})

