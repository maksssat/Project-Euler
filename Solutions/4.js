/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

function getLargestPalidrome() {
  let answer = 0;
  let start = Date.now();

  //в цикле умножаем трехзначные числа начиная с самых больших (999) друг на друга
  mainLoop: for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (product < answer) continue mainLoop; // если произведение множителей меньше текущего ответа продолжаем внешний цикл
      if (product.toString() === product.toString().split("").reverse().join("") && product > answer) {
        // если произведение является палиндромом и больше текущего значения в answer
        answer = product; //обновляем переменную с ответом
        continue mainLoop; //продолжаем внешний цикл
      }
    }
  }

  let end = Date.now();
  console.log("Time:", end - start);

  return answer;
}

console.log(getLargestPalidrome());
