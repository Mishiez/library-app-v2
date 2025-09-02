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
            <td>
              <button onclick = "toggleStatus(${myLibrary.indexOf(book)})" >${book.read}</button>
            </td>
            <td>
              <button onclick = "remBook(${myLibrary.indexOf(book)}, ${table.row})" >Delete</button>
            </td>
         </tr>`
})
}

const showButton = document.getElementById("newBookButton");
const favDialog = document.getElementById("newBookForm");
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
  var checkedValue = document.getElementById('checkboxForm').checked;
  favDialog.close(
    addBookToLibrary(jsTitleInput, jsAuthorInput, jsPagesInput, checkedValue)
  );
  addToHTML();
});

// function remBook(bookId) {
//   //const id = this.parentElement.classList[1];

//   const findBook = myLibrary.findIndex(
//     (element) => element.id === bookId
//   );
//   console.log(findBook);
//   //const delBook = myLibrary.splice(findBook, 1);
//   myLibrary.splice(findBook,1);
//   addToHTML();
// }

function remBook(bookIndex, row) {
  myLibrary.splice(bookIndex,1);
  console.log(bookIndex);
  addToHTML();
}

function toggleStatus(bookIndex) {
  //const id = this.parentElement.classList[1];

  // const findBook = myLibrary.findIndex(
  //   (findBook) => findBook.id == bookId
  // );
  // //const delBook = myLibrary.splice(findBook, 1);
  // var isSelected = findBook.read; 
  // // state.users.forEach(user => user.selected = false ); deselect others 
  // findBook.read = !isSelected;
  // addToHTML();
  console.log(bookIndex);
  // if(findBook.read  == true){
  //   findBook.read = false;
  // }
  // else{
  //   findBook.read = true;
  // }
  
   myLibrary[myLibrary.indexOf(bookIndex)].read = true ? false : true;
  addToHTML();
}



// function toggleCheck(checkedValue, valuesArr) {

//   let midArray = [...valuesArr];

//   return midArray.map( (module) => {
//     return module.map( (values)=>{
//       return {
//         ...values,
//         selected: values.name === checkedValue.name ? !values.selected : values.selected
//       }
//     })
//   }
//   )
// }



addBookToLibrary("GOT", "G T", 23, true);
addBookToLibrary("CHL", "A M", 56, false);
addBookToLibrary("GO", "G ", 23, true);
addBookToLibrary("CH", "A ", 56, false);

addToHTML()

console.log(myLibrary)