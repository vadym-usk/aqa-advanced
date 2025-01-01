import { Book } from './Book.js';
import { EBook } from './EBook.js';

// Objects creation
const book1 = new Book("Book1", "Author1", 2021);
const book2 = new Book("Book2", "Author2", 2022);
const eBook1 = new EBook("EBook1", "Author1", 2021, "pdf");
const eBook2 = new EBook("EBook2", "Author2", 2023, "pdf");

// printInfo() calls
book1.printInfo();
book2.printInfo();
eBook1.printInfo();
eBook2.printInfo();

// Static methods
console.log("\nOldest books are: " + Book.oldestBook([book1, book2, eBook1, eBook2]));
console.log("\nChanged Book to EBook: " + EBook.changeBookToEBook(book1, "docx"));