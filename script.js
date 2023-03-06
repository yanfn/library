// Modal variables
const modalContainer = document.getElementById('myModal');
const newBookBtn = document.getElementById('new-book');
const closeSpan = document.querySelector('.close');
const form = document.querySelector('.form-content');
const closeModal = () => {
    modalContainer.style.display = 'none';
};


// Modal EventListeners
newBookBtn.addEventListener('click', () => modalContainer.style.display = 'block');
closeSpan.addEventListener('click', closeModal);


// If the user clicks the modal container, modal-content closes
window.onclick = (e) => (e.target == modalContainer) ? closeModal() : null;



let myLibrary = [];

function Book(title, author, page) {
    this.title = title
    this.author = author
    this.page = page
}

function addBookToLibrary() {
    let newBook = new Book(
        document.getElementById('book-title').value,
        document.getElementById('book-author').value,
        document.getElementById('book-page').value
    );
}