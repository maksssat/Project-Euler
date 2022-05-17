// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function getSum(n) {
    const squareOfSum = ((n * (n + 1)) / 2) ** 2; //квадрат суммы
    const sumOfSquare = (n * (n + 1) * (2 * n + 1)) / 6; //сумма квадратов
  
    return squareOfSum - sumOfSquare;
  }
  
  console.log(getSum(100));
  