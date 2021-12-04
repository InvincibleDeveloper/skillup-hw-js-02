(function task5() {
  let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let oddArrNumbers = [];

  for (let number of arr15) {
    if (number % 2 === 0) continue;
    oddArrNumbers.push(number);
  }

  console.log(oddArrNumbers);
})();
