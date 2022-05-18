/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */

function getSumOfPrimes(n) {
  let sumOfPrimes = 2;

  const primesArr = [2];

  outerLoop: for (let i = 3; i <= n; i += 2) {
    for (let j = 0; j < primesArr.length; j++) {
      if (i % primesArr[j] === 0) continue outerLoop;
    }
    sumOfPrimes += i;
    primesArr.push(i);
  }

  return sumOfPrimes;
}

console.log(getSumOfPrimes(2e6));
