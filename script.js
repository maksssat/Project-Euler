/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a**2 + b**2 = c**2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

function getProduct() {
  //в цикле подставляем в а и b значения, при которых a < b < c и a + b + c = 1000
  for (let a = 332; a > 2; a--) {
    let bMax = Math.round((1000 - a) / 2 - 1);

    for (let b = bMax; b > a; b--) {
      /* проверяем являются ли данные a и b, значениями пифагоровой тройки 
      (уравнение выведено из системы уравнений a**2 + b**2 = c**2 и a + b + c = 1000) */
      if (a + b - (a * b) / 1000 === 500) {
        return a * b * (1000 - a - b);
      }
    }
  }
}

console.log(getProduct()); //31875000
