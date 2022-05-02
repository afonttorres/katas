const { fizzbuzz, returnDiv, returnAdults } = require('./fizzbuzz');

test('should return Fizz when param is 3 div', () => {
    let result = fizzbuzz(6);
    expect(result).toBe('Fizz');
})

test('should return Buzz when param is 5 div', () => {
    let result = fizzbuzz(10);
    expect(result).toBe('Buzz');
})

test('should return FizzBuzz when param is 5 & 3 div', () => {
    let result = fizzbuzz(30);
    expect(result).toBe('FizzBuzz');
})

test('should return param when param is not div by 3 & 5', () => {
    let result = fizzbuzz(4);
    expect(result).toBe(4);
})

test('should return numbers of the array div by num', () => {
    let result = returnDiv([3, 6, 9, 10], 3);
    expect(result).toStrictEqual([3, 6, 9]);
})

test('should return array with adult users', () => {
    const users = [
        {
            name: 'Agnès',
            age: 27
        },
        {
            name: 'Nil',
            age: 23
        },
        {
            name: 'Africa',
            age: 0
        },
        {
            name: 'Marina',
            age: 28
        }
    ]

    let usersOutput = [
        {
            name: 'Agnès',
            age: 27
        },
        {
            name: 'Nil',
            age: 23
        },
        {
            name: 'Marina',
            age: 28
        }
    ]

    let result = returnAdults(users);

    expect(result).toStrictEqual(usersOutput);
})