import React, { useState } from "react";
import { IBook } from "../interfaces/IBooks";
import { Genres } from "../enums/Genre";

interface SearchFilterProps {
  books: IBook[];
  onFilter: (filteredBooks: IBook[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ books, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [publishYear, setPublishYear] = useState<number | "">("");

  const handleSearch = () => {
    let filteredBooks = books;

    if (searchTerm.trim()) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre !== "All") {
      filteredBooks = filteredBooks.filter(
        (book) => book.genre === selectedGenre
      );
    }

    if (publishYear) {
      filteredBooks = filteredBooks.filter(
        (book) => book.publishedYear === Number(publishYear)
      );
    }

    onFilter(filteredBooks);
  };

  return (
    <div>
      <h2>Search and Filter</h2>
      {    }
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {     }
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All">All Genres</option>
        {Object.values(Genres).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {     }
      <input
        type="number"
        placeholder="Filter by published year"
        value={publishYear}
        onChange={(e) =>
          setPublishYear(e.target.value ? Number(e.target.value) : "")
        }
      />

      <button onClick={handleSearch}>Apply Filters</button>
    </div>
  );
};

export default SearchFilter;
