const fizzbuzz = require('./fizzbuzz');

test('should return Fizz when param is 3 div', ()=>{
    let result = fizzbuzz(6);
    expect(result).toBe('Fizz')
})