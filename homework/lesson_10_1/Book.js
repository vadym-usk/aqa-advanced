export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log("Title: " + this.title + " | Author: " + this.author + " | Year: " + this.year);
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.log("Error: Title must be a non-empty string!");
            return;
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.log("Error: Author must be a non-empty string!");
            return;
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.log("Error: Year must be number and greater than 0!");
            return;
        }
        this._year = value;
    }

    static oldestBook(value) {
        const minYear = Math.min(...value.map(obj => obj.year));
        const oldestBook = value.filter(obj => obj.year === minYear);
        return JSON.stringify(oldestBook, null, 0);
    }
}