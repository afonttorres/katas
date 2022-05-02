const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else {
        return num
    }
}

const returnDiv = (arr, num) => {
    return arr.filter(arrnum => arrnum % num === 0)
}

const returnAdults = (arr)=>{
    return arr.filter(arruser => arruser.age >= 18)
}

module.exports = { fizzbuzz, returnDiv, returnAdults };