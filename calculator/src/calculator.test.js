const calculator = require('./calculator');

//Test que no falla
//Sumem un número al total
test('should return same num we entered as param', () => {
    //escenari
    calculator.total = 0;
    calculator.sum(3)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(3);
})

// //Test que falla
// //Sumem un número al total
// test("should not return same num we entered as param", ()=>{
//     //escenari
//     calculator.total = 0;
//     calculator.sum(5)
//     //acció
//     let result = calculator.total;
//     //resultat
//     expect(result).toBe(10);
// })

//Restem
test('should return same num we entered as param in neg', () => {
    //escenari
    calculator.total = 0;
    calculator.rest(2)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(-2);
})

//Multipliquem
test('should return total mult by num entered as param', () => {
    //escenari
    calculator.total = 2;
    calculator.mult(2)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(4);
})

//Dividim
test('should return total div by num entered as param', () => {
    //escenari
    calculator.total = 6;
    calculator.div(2)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(3);
})

//Modul
test('should return module (residu) of total div by num', () => {
    //escenari
    calculator.total = 12;
    calculator.module(5)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(2);
})

//Modul
test('should return module (residu) of total div by num', () => {
    //escenari
    calculator.total = 10;
    calculator.module(5)
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(0);
})

//És parell?
test('should return true if num even and false if num odd', () => {
    //escenari
    //acció
    let result = calculator.isEven(5);
    //resultat
    expect(result).toBe(false);
})

//És parell?
test('should return true if num even and false if num odd', () => {
    //escenari
    //acció
    let result = calculator.isEven(4);
    //resultat
    expect(result).toBe(true);
})

//Torna el més gran
test('should return major num of nums2 (num1 & num2)', () => {
    //escenari
    //acció
    let result = calculator.returnMajor(22, 2);
    //resultat
    expect(result).toBe(22);
})

//Suma tots els números d'un array
test('should return sum of array nums', () => {
    //escenari
    calculator.total = 0;
    let numArr = [1,2,3,4,5]
    calculator.sumArr(numArr);
    //acció
    let result = calculator.total;
    //resultat
    expect(result).toBe(15);
})


//Filtra els números més grans o iguals a 5
test('should return major or equal to 5', () => {
    //escenari
    let numArr = [4,15,1,50,5, 8, 20, 0, 2]
    //acció
    let result = calculator.returnPlus5(numArr);
    //resultat
    expect(result).toStrictEqual([15,50,5,8,20])
})