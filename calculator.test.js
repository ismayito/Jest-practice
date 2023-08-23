const Calculator = require('./calculator');

const myCalc = new Calculator();

describe('calculator tests', () => {
  it('add test', () => {
    const myCalc = new Calculator(1, 2);
    const addTest = myCalc.add();
    expect(addTest).toBe(3);
  });

  it('subtract test', () => {
    const myCalc = new Calculator(3, 2);
    const addTest = myCalc.subtract();
    expect(addTest).toBe(1);
  });

  it('multiply test', () => {
    const myCalc = new Calculator(1, 2);
    const addTest = myCalc.multiply();
    expect(addTest).toBe(2);
  });

  it('divide test', () => {
    const myCalc = new Calculator(4, 2);
    const addTest = myCalc.divide();
    expect(addTest).toBe(2);
  });
});
