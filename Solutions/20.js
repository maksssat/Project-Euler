/* n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! */

function getSumOfDigits() {
    let factorial = 1n;
  
    // в цикле умножаем числа от 2 до 100 на значение в переменной factorial
    for (let i = 2n; i <= 100; i++) {
      factorial *= i;
    }
  
    const factorialString = factorial.toString(); // получаем строку
  
    const factorialArray = factorialString.split(""); // разбиваем строку на массив
  
    return factorialArray.reduce((a, b) => +a + +b); // поулчаем сумму значений в массиве
  }
  
  console.log(getSumOfDigits());
  