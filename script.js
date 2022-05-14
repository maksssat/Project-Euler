/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

function getLargestPalidrome() {
  let answer = 0;
  let start = Date.now();

  mainLoop: for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (product < answer) continue mainLoop;
      if (product.toString() === product.toString().split("").reverse().join("") && product > answer) {
        answer = product;
        continue mainLoop;
      }
    }
  }

  let end = Date.now();
  console.log("Time:", end - start);

  return answer;
}

console.log(getLargestPalidrome());
