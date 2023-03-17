const books = [
  {title: "The Hunger Games", author: "Suzanne Collins", year: 2018},
  {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
  {title: "1984", author: "George Orwell", year: 1949},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
  {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
  {title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954},
  {title: "Pride and Prejudice", author: "Jane Austen", year: 1813},
  {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979}
];

const filteredBooks = books.filter(book => book.year >= 2010);
const capitalizedBooks = filteredBooks.map(book => {
  return {
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year
  };
});

console.log(capitalizedBooks);

