/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

function getLargestPrimeFactor(int) {
  let largestPrimeFactor;
  let currIntValue = int;

  //функция возвращает генератор, при вызове метода next генератора он возвращает следующее простое число
  function* primeGenerator() {
    for (let i = 2; ; i++) {
      if (isPrime(i)) yield i;
    }

    function isPrime(num) {
      for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
  }

  let generator = primeGenerator(); // получаем генератор
  let currPrime = generator.next().value; // получаем значение текущего простого числа из генератора

  while (currIntValue > 1) {
    // цикл делит переданное в функцию число на простые числа начиная с двух
    if (currIntValue % currPrime === 0) {
      // если число делится без остатка,
      largestPrimeFactor = currPrime; // обновляем значение largestPrimeFactor
      currIntValue /= currPrime; //делим число на это простое число
    } else {
      currPrime = generator.next().value; // иначе получаем следующее простое число из генератора
    }
  }

  return largestPrimeFactor;
}

console.log(getLargestPrimeFactor(600851475143));
