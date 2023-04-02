// 4. Write an ES6 function that takes an array of
// strings and returns the shortest string in the array.

export const getShortestString = (str) => {
  // Your ES6 code here
  let shortestStrLength = Number.POSITIVE_INFINITY,
    shortestStrIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (shortestStrLength > str[i].length) {
      shortestStrLength = str[i].length;
      shortestStrIndex = i;
    }
  }

  return str[shortestStrIndex];
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
