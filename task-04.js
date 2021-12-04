(function task4() {
  let str = "JavaScript is a pretty good language";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else if (str[i] === " ") {
      continue;
    } else {
      newStr += str[i];
    }
  }

  console.log(newStr);
})();
