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

function addToHTML() {
  const table = document.querySelector('tbody');
  while(table.rows.length > 0) {
    table.deleteRow(0);
  }
  myLibrary.forEach((book) => {
    table.innerHTML = table.innerHTML + 
        `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
         </tr>`
})
}

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("input");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  let jsTitleInput = document.getElementById('titleInput').value;
  let jsAuthorInput = document.getElementById('authorInput').value;
  let jsPagesInput = document.getElementById('pagesInput').value;
  var checkedValue = document.querySelector('.bookStatus:checked').value;
  favDialog.close(
    addBookToLibrary(jsTitleInput, jsAuthorInput, jsPagesInput, checkedValue)
  );
  addToHTML();
});


addBookToLibrary("GOT", "G T", 23, true);
addBookToLibrary("CHL", "A M", 56, false);
addBookToLibrary("GO", "G ", 23, true);
addBookToLibrary("CH", "A ", 56, false);

addToHTML()

console.log(myLibrary)