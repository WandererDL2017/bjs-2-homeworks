class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       return this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
} 

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } 
    }

    findBookBy(type, value) {
        let result;
        for (let book of this.books) {
            (book[type] === value)? result = book : result = null;
        }
        return result;
    }

    giveBookByName(bookName) {
        let name;
        for (let book of this.books) {
            if(book.name === bookName) {
                return name = this.books.pop(book);
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        } 
        (this.subjects[subject] === undefined )? this.subjects[subject] = [mark] : this.subjects[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if ( !this.subjects[subject] ) {
            return "Несуществующий предмет";
        }
        return +(this.subjects[subject].reduce((acum, mark) => acum + mark) / this.subjects[subject].length).toFixed(1);
    }

    getAverage() {
        let sum = 0;
        let length = 0;
        for(let subject of Object.values(this.subjects)) {
            sum += subject.reduce((accum, mark) => accum + mark);
            length += subject.length;
        }
        return +(sum / length).toFixed(1);
    }

    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    } 
}