import React from "react";
import { IBook } from "../interfaces/IBooks";

interface BookListProps {
  books: IBook[];
  onDelete: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} ({book.publishedYear})
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
