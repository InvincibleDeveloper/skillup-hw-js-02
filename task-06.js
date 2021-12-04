(function task6() {
  let list = {
    name: "denis",
    work: "easycode",
    age: 29,
  };

  for (let prop in list) {
    if (typeof list[prop] === "string") {
      list[prop] = list[prop].toUpperCase();
    }
  }

  console.log(list);
})();
