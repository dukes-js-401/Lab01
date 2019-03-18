'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic', () => {
    
    describe('testing .add function', () => {

        it('returns sum of two numbers ', () => {
            let input = arithmetic.add(1,2);
            let expectedOutput = 3;
            expect(input).toEqual(expectedOutput);
        })

        it('returns null if passed not-a-number', () => {
            let input = arithmetic.add('1',2);
            let expectedOutput = null;
            expect(input).toEqual(expectedOutput);
        })

    })

    describe('testing .subtract function', () => {

        it('returns difference of two numbers', () => {
            let input = arithmetic.subtract(3,2);
            let expectedOutput = 1;
            expect(input).toEqual(expectedOutput);
        })
        it('returns null if passed not-a-number', () => {
            let input = arithmetic.subtract('3',2);
            let expectedOutput = null;
            expect(input).toEqual(expectedOutput);
        })
    })
})