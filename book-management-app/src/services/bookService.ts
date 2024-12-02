import axios from "axios";
import { IBook } from "../interfaces/IBooks";

const API_URL = "https://db-mock-api.vercel.app/books";

export const fetchBooks = async (): Promise<IBook[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (book: IBook): Promise<IBook> => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
