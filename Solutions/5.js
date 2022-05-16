/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

/* Находим НОК по алгоритму солгласно которому разложение HOK содержит все простые множители, входящие хотя бы в одно
из разложений чисел a,b, причём из показателей степени этого множителя берётся наибольший. */

function getLCM(n, m) {
    let primeFactorsArr = [];
  
    /* раскладываем каждое число в диапазоне на простые множители, добавляем множители для каждого числа в отдельный массив 
    и добавляем данный массив о общий массив primeFactorsArr, при этом значиния повторяющихся простых множителей для каждого 
    числа хранятся в отлельном массиве ([[[2,2], [3,3,3]]])*/
    for (let i = n; i <= m; i++) {
      let map = new Map();
  
      let primeFactors = getPrimeFactors(i);
  
      if (!primeFactors.length) continue;
  
      primeFactors.forEach((item) => {
        if (!map.has(item))
          map.set(item, [item]); //если в коллекции нет ключа создаем его и кладем в массив
        else map.set(item, [...map.get(item), item]); //если есть добавляем к массиву по данному ключу следующий множитель
      });
  
      // добавляем в массив primeFactorsArr результат разложения числа в виде массива [[2,2], [3,3,3]]
      primeFactorsArr.push([...map.values()]); 
    }
  
    let mapOfPrimesArr = new Map(); //вспомогательная коллекция для определения наибольшей степени
  
    /* для определения наибольшей степени для каждого простого множителя в массиве primeFactorsArr перебираем массив в цикле, в 
    итоге для каждого простого множителя получится только один массив с наибольшей длиной*/
    primeFactorsArr.forEach((item) => {
      item.forEach((innerItem) => {
        if (!mapOfPrimesArr.has(innerItem[0])) {
          //если в коллекции нет ключа создаем его
          mapOfPrimesArr.set(innerItem[0], innerItem);
        } else if (innerItem.length > mapOfPrimesArr.get(innerItem[0]).length) {
          //иначе если в коллекции по ключу хранится массив меньшей длины, то обновляем значение в коллекции по данному ключу
          mapOfPrimesArr.set(innerItem[0], innerItem);
        }
      });
    });
  
    /* возвращаем значение НОК, полученное путем преобразования коллекции в массив, поднимаем все значени на уровень выше с 
    помощью flat(), и с помощью reduce() умножаем все значения в массиве */
    return [...mapOfPrimesArr.values()].flat().reduce((a, b) => a * b);
  }
  
  //функция возвращает для переданного числа массив простых множителей (измененная Ф из задачи 3)
  function getPrimeFactors(int) {
    let primeFactorsArr = [];
    let currIntValue = int;
  
    //функция возвращает генератор, при вызове метода next генератора он возвращает следующее простое число
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
  
    let generator = primeGenerator(); // получаем генератор
    let currPrime = generator.next().value; // получаем значение текущего простого числа из генератора
  
    while (currIntValue > 1) {
      // цикл делит переданное в функцию число на простые числа начиная с двух
      if (currIntValue % currPrime === 0) {
        // если число делится без остатка,
        primeFactorsArr.push(currPrime); // добавляем значение в primeFactorArr
        currIntValue /= currPrime; //делим число на это простое число
      } else {
        currPrime = generator.next().value; // иначе получаем следующее простое число из генератора
      }
    }
  
    return primeFactorsArr;
  }
  
  console.log(getLCM(1, 20));
  