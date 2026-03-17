import Book from "./Book.js";

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(newFileFormat) {
        if (typeof newFileFormat !== "string" || newFileFormat.trim() === "") {
            console.error("Invalid file format. It should be a non-empty string.");
            return;
        }
        this._fileFormat = newFileFormat;
    }

    printInfo() {
        super.printInfo()
        console.log(`File Format: ${this._fileFormat}`);
    }

    static convertBooksToEbooks(book, fileFormat) {
        if (!(book instanceof Book)) {
            console.error("The provided object is not a Book instance.");
            return null;
        }
        return new EBook(book.name, book.author, book.year, fileFormat);
    }
}

export default EBook;
