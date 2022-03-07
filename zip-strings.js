function zipStrings(strA, strB) {
  let arrayStrA = strA.split(""); // [a,b,c]
  let arrayStrB = strB.split(""); // [1,2,3]
  let zipArray = [];

  if (arrayStrA.length >= arrayStrB.length) {
    for (let i = 0; i < arrayStrA.length; i++) {
      zipArray.push(arrayStrA[i]);
      zipArray.push(arrayStrB[i]);
    }
  } else {
    for (let i = 0; i < arrayStrB.length; i++) {
      zipArray.push(arrayStrA[i]);
      zipArray.push(arrayStrB[i]);
    }
  }
  return zipArray.join("");
}
