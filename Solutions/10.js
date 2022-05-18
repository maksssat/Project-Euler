/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */

function getSumOfPrimes(n) {
  let sumOfPrimes = 2;

  const primesArr = [2];

  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      sumOfPrimes += i;
      primesArr.push(i);
    }
  }

  function isPrime(n) {
    for (let j = 0; j < primesArr.length; j++) {
      if (n % primesArr[j] === 0) return false;
    }
    return true;
  }

  return sumOfPrimes;
}

console.log(getSumOfPrimes(2e6));
