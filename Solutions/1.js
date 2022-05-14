// Problem #1

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

//### Solution #1 ###
//Проверка чисел от 3 до 1000, делятся ли они на 3 или 5 без остатка, если да то прибавляем данное число к сумме кратных.

function getSum1() {
  let multiplesSum = 0;

  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiplesSum += i;
  }

  return multiplesSum;
}

console.log(getSum1()); // 233168

//### Solution #2 ###
//Проверка чисел от 3 до 1000, кратна ли сумма цифр составляющих число 3, а также является ли последняя цифра 5 или 0.

function getSum2() {
  let multiplesSum = 0;

  for (let i = 3; i < 1000; i++) {
    if (
      String(i)
        .split("")
        .reduce((prev, curr) => +prev + +curr) %
        3 ===
        0 ||
      String(i).split("").at(-1) == 5 ||
      String(i).split("").at(-1) == 0
    ) {
      multiplesSum += i;
    }
  }

  return multiplesSum;
}

console.log(getSum2()); // 233168
