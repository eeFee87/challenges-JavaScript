function squareSum(numbers) {
  const arraySquares = numbers.map((number) => Math.pow(number, 2));
  let total = arraySquares.reduce((a, b) => a + b, 0);
  return total;
}
