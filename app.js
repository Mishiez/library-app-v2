console.log("he there Michelle");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = window.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages ,read,id) {
    // take params, create a book then store it in the array
    const book =  new Book(title, author, pages, read, id);
    return myLibrary.push(book);
}

addBookToLibrary("GOT", "G T", 23, true);
addBookToLibrary("CHL", "A M", 56, false);
addBookToLibrary("GO", "G ", 23, true);
addBookToLibrary("CH", "A ", 56, false);
console.log(myLibrary)




//************//
// normally this is what I would have done
// Book.prototype.info = function() {
//     return `${this.title}, ${this.title},${this.pages}, ${this.read}`
// }

// const book1 = new Book("GOT", "G T", 23, true);
// console.log(book1.info());


