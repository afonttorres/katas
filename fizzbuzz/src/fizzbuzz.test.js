const fizzbuzz = require('./fizzbuzz');

test('should return Fizz when param is 3 div', ()=>{
    let result = fizzbuzz(6);
    expect(result).toBe('Fizz');
})

test('should return Buzz when param is 5 div', ()=>{
    let result = fizzbuzz(10);
    expect(result).toBe('Buzz');
})

test('should return FizzBuzz when param is 5 & 3 div', ()=>{
    let result = fizzbuzz(30);
    expect(result).toBe('FizzBuzz');
})