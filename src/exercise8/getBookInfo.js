// 8. Write an ES6 function that takes an object with title and author properties and returns a string in the format "{title} by {author}". Do this with least amount of characters.

export const getBookInfo = (bookInfo) => {
  // Your ES6 code here
  return `${bookInfo.title} by ${bookInfo.author}`;
};

const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
console.log(getBookInfo(book)); // The Hobbit by J.R.R. Tolkien
