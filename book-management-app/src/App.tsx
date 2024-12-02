import React, { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/Bookform";
import SearchFilter from "./components/SearchFilter";
import { fetchBooks, addBook, deleteBook } from "./services/bookService";
import { IBook } from "./interfaces/IBooks";

const App: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);

 
  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
      setFilteredBooks(fetchedBooks); 
    };
    getBooks();
  }, []);

  
  const handleAddBook = async (newBook: IBook) => {
    const addedBook = await addBook(newBook);
    setBooks((prevBooks) => [...prevBooks, addedBook]);
    setFilteredBooks((prevBooks) => [...prevBooks, addedBook]); // Update filtered list
  };


  const handleDeleteBook = async (id: string) => {
    await deleteBook(id);
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    setFilteredBooks((prevBooks) => prevBooks.filter((book) => book.id !== id)); // Update 
  };

  
  const handleFilterBooks = (filtered: IBook[]) => {
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Book Management App</h1>
      <SearchFilter books={books} onFilter={handleFilterBooks} />
      <BookForm onAdd={handleAddBook} />
      <BookList books={filteredBooks} onDelete={handleDeleteBook} />
    </div>
  );
};

export default App;

