const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 10_000_000;
    actual = sum(5_000_000, 5_000_000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-4, -6);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 7;
    actual = sum(0, 7);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 5_000_000;
    actual = subtract(10_000_000, 5_000_000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -10;
    actual = subtract(-15, -5);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 7;
    actual = subtract(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
