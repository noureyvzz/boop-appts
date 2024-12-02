export class Book {
    id: string;
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
  
    constructor(id: string, title: string, author: string, publishedYear: number, genre: string) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.genre = genre;
    }
  
    formatBookInfo(): string {
      return `${this.title} by ${this.author}`;
    }
  }
  