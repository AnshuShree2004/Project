
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];
  
  
  function logTitles(titles) {
    titles.sort();
    console.log(titles);
  }
  
  
  function processBooks(books, callback) {
      const titles = books.map(book => book.title);
     callback(titles);
  }
  
  processBooks(books, logTitles);
  