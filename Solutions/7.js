/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

//проверяем является ли число простым путем деления на все ранее найденные простые числа
function getNthPrime(n) {
  let start = Date.now();
  const primesArr = [2];

  outerLoop: for (let i = 3; primesArr.length < n; i++) {
    for (let j = 0; j < primesArr.length; j++) {
      if (i % primesArr[j] === 0) continue outerLoop;
    }
    primesArr.push(i);
  }

  let end = Date.now();
  console.log("Time:", end - start);
  return primesArr.at(-1);
}

//проверяем является ли число простым путем деления на все числа меньше этого числа, но больше еденицы
function getNthPrime2(n) {
  let start = Date.now();
  let counter = n;
  let currPrime = 0;

  outerLoop: for (let i = 2; counter > 0; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue outerLoop;
    }
    counter--;
    currPrime = i;
  }

  let end = Date.now();
  console.log("Time:", end - start);

  return currPrime;
}

console.log(getNthPrime(10001));
console.log(getNthPrime2(10001));
// первый алгоритм быстрее второго в 10 раз
