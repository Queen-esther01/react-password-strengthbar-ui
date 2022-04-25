//import {describe, expect, test} from '@jest/globals'
const passwordChecker = require('./checker.js')

test('password is empty ', () => {
    expect(passwordChecker('')).toStrictEqual(expect.objectContaining({
        state : 'empty',
        message: 'Password is empty',
        password : '',
        errors : ['Password is empty'],
    }));
});

test('password should be 8, have special character, number, uppercase and lowercase', () => {
    expect(passwordChecker('Esther123@')).toStrictEqual(expect.objectContaining({
        state : 'very strong',
        message: 'Password is very strong',
        password : 'Esther123@',
        errors : [],
    }));
})

test('password should have at least 8 characters', () => {
    expect(passwordChecker('Es1234@')).toStrictEqual(expect.objectContaining({
        state: 'strong',
        password: 'Es1234@',
        message: 'Password is strong',
        errors: ['Password must be at least 8 characters long']
    }));
})

test('password should have a special character', () => {
    expect(passwordChecker('Est1234')).toStrictEqual(expect.objectContaining({
        state: 'fair',
        password: 'Est1234',
        message: 'Password is fair',
        errors: ['Password must be at least 8 characters long', 'Password must contain at least one special character']
    }));
})
//console.log(passwordChecker('est123'))

test('password should have an uppercase letter', () => {
    expect(passwordChecker('es123')).toStrictEqual(expect.objectContaining({
        state: 'weak',
        password: 'es123',
        message: 'Password is weak',
        errors: ['Password must be at least 8 characters long', 'Password must contain at least one uppercase letter', 'Password must contain at least one special character']
    }));
})

test('password should have a lowercase letter', () => {
    expect(passwordChecker('ES#1234&')).toStrictEqual(expect.objectContaining({
        state: 'strong',
        password: 'ES#1234&',
        message: 'Password is strong',
        errors: ['Password must contain at least one lowercase letter']
    }));
})

test('password should have a number', () => {
    expect(passwordChecker('ES#est&t')).toStrictEqual(expect.objectContaining({
        state: 'strong',
        password: 'ES#est&t',
        message: 'Password is strong',
        errors: ['Password must contain at least one number']
    }));
})




