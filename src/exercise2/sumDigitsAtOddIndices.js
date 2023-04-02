// 2. Write an ES6 function which takes an array
// of digits and return the sum of all digits present at
// odd indices. Avoid using in-built methods.

export const sumDigitsAtOddIndices = (arr) => {
  // Your ES6 code here
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      totalSum += arr[i];
    }
  }

  return totalSum;
};

console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20
