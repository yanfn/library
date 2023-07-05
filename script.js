// Modal variables
const modalContainer = document.getElementById('myModal');
const newBookBtn = document.getElementById('new-book');
const closeSpan = document.querySelector('.close');
const form = document.querySelector('.form-content');
const closeModal = () => {
    modalContainer.style.display = 'none';
};


// Modal EventListeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
});
newBookBtn.addEventListener('click', () => modalContainer.style.display = 'block');
closeSpan.addEventListener('click', closeModal);

// If the user clicks the modal container, modal-content closes
window.onclick = (e) => (e.target == modalContainer) ? closeModal() : null;


let myLibrary = [];


const Book = (title, author, page, read) => {
    
    return {
        title,
        author,
        page,
        read,
        bookRead() {
            this.read = !this.read
        }
    }
}


function addBookToLibrary() {
    let newBook = Book(
        document.getElementById('book-title').value,
        document.getElementById('book-author').value,
        document.getElementById('book-page').value,
        // Pass a boolean data (true or false) to the object Book.
        document.getElementById('book-read').checked
    );

    myLibrary.push(newBook);
    console.table(myLibrary);
    closeModal();
    form.reset();
    displayBooks();
}

function displayBooks() {
    // Card variables
    const displayCards = document.querySelector('.container');
    displayCards.textContent = '';



    // Loop myLibrary array and display every object in a card.
    // Get index of the array element and store it in data attribute for deletion.
    myLibrary.forEach((book, index) => {
        const cards = document.createElement('div');
        cards.classList = 'card'
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const page = document.createElement('p');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        const putBr = document.createElement('br');
        
        title.textContent = book.title;
        cards.appendChild(title);

        author.textContent = 'Author: ' + book.author;
        cards.appendChild(author);

        page.textContent = 'Pages: ' + book.page;
        cards.appendChild(page);

        // Toggle read/not read button calls object prototype of Book
        readBtn.textContent = book.read ? "Read" : "Not Read";
        readBtn.addEventListener('click', () => {
            book.bookRead();
            readBtn.textContent = book.read ? "Read" : "Not Read";
            console.table(myLibrary);
        });
        readBtn.classList = "readBtn";
        cards.appendChild(readBtn);
        cards.appendChild(putBr);

        removeBtn.textContent = 'Remove'
        removeBtn.classList = 'deleteCard';
        removeBtn.dataset.index = index;
        cards.appendChild(removeBtn);

        displayCards.appendChild(cards);
    });

    deleteCards();
}

// Delete Card Button
function deleteCards () {
    const deleteButton = document.querySelectorAll('.deleteCard');

    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            myLibrary.splice(button.getAttribute('data-index'), 1);
            console.log(myLibrary);
            displayBooks();
        });
    });
}
