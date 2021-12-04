(function task3() {
  function factorialConfig(n) {
    if (Number.isInteger(n) && n > 0) {
      // It is array to show factorial configuration
      let factArr = [];

      for (n; n >= 0; n--) {
        factArr.push(n);
      }
      return factArr.join(" * ");
    } else {
      return NaN;
    }
  }

  function factorial(n) {
    if (Number.isInteger(n) && n > 0) {
      let factNumber = 1;
      for (n; n > 0; n--) {
        factNumber *= n;
      }
      return factNumber;
    } else {
      return NaN;
    }
  }

  console.log(factorialConfig(10));
  console.log(factorial(10));
})();
