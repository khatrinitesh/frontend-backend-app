import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:4000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
     <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
