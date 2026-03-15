import Book from "./Book.js";
import EBook from "./EBook.js";
//Find the first oldest book
const arrayAllBooks = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1861),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new EBook("The Catcher in the Rye", "J.D. Salinger", 1951, "PDF"),
    new EBook("Moby Dick", "Herman Melville", 1851, "Doc")    
];
console.log("The first oldest book in array:");
Book.findFirstOldest(arrayAllBooks).printInfo();
console.log("=============");
//Call the method from EBook
console.log("Convert Book to Ebook");
EBook.convertBooksToEbooks(new Book("Pride and Prejudice", "Jane Austen", 1813), "PDF").printInfo();
console.log("=============");
//Find all books that are the oldest
const arrayAllBooks2 = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1861),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new EBook("The Catcher in the Rye", "J.D. Salinger", 1861, "PDF"),
    new EBook("Moby Dick", "Herman Melville", 1951, "Doc")    
];
console.log("The list of all oldest books:");
const oldestBooks = Book.findAllOldestBooks(arrayAllBooks2);
oldestBooks.forEach(book => {
    console.log(`Book: ${book.name}, Author: ${book.author}, Year: ${book.year}`);
    if (book instanceof EBook) {
        console.log(`File format: ${book.fileFormat}`);
    }
});