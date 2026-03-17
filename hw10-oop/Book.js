class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }
    set name(newName) {
        if (typeof newName !== "string") {
            console.error("The name should be a string.");
            return;
        }
        if (newName.trim() === "") {
            console.error("The name should be a non-empty string.");
            return;
        }
        this._name = newName;
    }

    set author(newAuthor) {
        if (typeof newAuthor !== "string" || newAuthor.trim() === "") {
            console.error("Invalid author. It should be a non-empty string.");
            return;
        }
        this._author = newAuthor;
    }

    set year(newYear) {
        if (typeof newYear !== "number" || isNaN(newYear) || newYear < 0) {
            console.error("Invalid year. It should be a positive number.");
            return;
        }
        this._year = newYear;
    }

    printInfo() {
        console.log(`Book: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findFirstOldest(books) {
        if (!books.length) {
            console.error("The array of books is empty.");
            return null;
        }
        return books.reduce((oldestBook, currentBook) =>
             currentBook.year < oldestBook.year ? currentBook : oldestBook);   
    }

    static findAllOldestBooks(books) {
        if (!books.length) {
            console.error("The array of books is empty.");
            return [];
        }
        const allOldestBooks = [];
        const arrayOfYearBooks =  books.map(book => book.year);
        const minYearOfBook = Math.min(...arrayOfYearBooks);
        for (const book of books) {
            if (book.year === minYearOfBook) {
                allOldestBooks.push(book);
            }
        }
        return allOldestBooks;
    }
}

export default Book;