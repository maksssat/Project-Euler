/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

function getLargestPrimeFactor(int) {
    let largestPrimeFactor;
    let currIntValue = int;
  
    function* primeGenerator() {
      for (let i = 2; ; i++) {
        if (isPrime(i)) yield i;
      }
  
      function isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
        }
        return true;
      }
    }
  
    let generator = primeGenerator();
    let currPrime = generator.next().value;
  
    while (currIntValue > 1) {
      if (currIntValue % currPrime === 0) {
        largestPrimeFactor = currPrime;
        currIntValue /= currPrime;
      } else {
        currPrime = generator.next().value;
      }
    }
  
    return largestPrimeFactor;
  }
  
  console.log(getLargestPrimeFactor(600851475143));
  