import React, { useState } from "react";
import { IBook } from "../interfaces/IBooks";
import { Genres } from "../enums/Genre";

interface BookFormProps {
  onAdd: (book: IBook) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState<number>(2023);
  const [genre, setGenre] = useState<Genres>(Genres.Drama);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ id: Date.now().toString(), title, author, publishedYear, genre });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={publishedYear}
        onChange={(e) => setPublishedYear(Number(e.target.value))}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value as Genres)}>
        {Object.values(Genres).map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
