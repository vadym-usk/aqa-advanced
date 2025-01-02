import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log("Title: " + this.title + " | Author: " + this.author + " | Year: " + this.year + " | File format: " + this.fileFormat);
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.log("Error: File must be a non-empty string!");
            return;
        }
        this._fileFormat = value;
    }

    static changeBookToEBook(obj, value) {
        const newEBook = new EBook(obj.title, obj.author, obj.year, value);
        return JSON.stringify(newEBook, null, 0);
    }
}