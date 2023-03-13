const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
];

const filteredBooks = books.filter(book => book.year >= 2010)
                          .map(book => {
                            return {
                              title: book.title,
                              author: book.author.toUpperCase(),
                              year: book.year
                            }
                          });

console.log(filteredBooks);
