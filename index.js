import Book from './modules/book.js';
import div from './modules/div.js';
import { createRemove, addBookToList, removeContent, removeBook } from './modules/bookControllers.js';
import emptyValue from './modules/emptyValue.js';

export const book = new Book();

const titleInput = document.getElementsByName('title')[0];
const authorInput = document.getElementsByName('author')[0];
const addBtn = document.getElementsByName('add')[0];
const erroMsg = document.querySelector('.error-msg');
const booksContainer = document.querySelector('.display-book');

if (addBtn) {
  addBtn.addEventListener('click', () => {
    const bookDetials = {
      title: titleInput.value,
      author: authorInput.value,
    };
    if (emptyValue(bookDetials)) {
      const divError = div('li', 'title and author must be not be empty');
      erroMsg.innerHTML = divError.innerHTML;
      return false;
    }
    erroMsg.innerHTML = '';
    book.addBook(bookDetials);
    const { bookItemDiv, btnRemove } = addBookToList(bookDetials);
    booksContainer.appendChild(bookItemDiv);
    removeBook(btnRemove);

    titleInput.value = '';
    authorInput.value = '';
    return true;
  });
}

const dataOfBooks = book.getLocalStorage();
if (dataOfBooks.length > 0) {
  dataOfBooks.forEach((book) => {
    const { bookItemDiv } = addBookToList(book);
    booksContainer.appendChild(bookItemDiv);
  });
} else {
  booksContainer.innerHTML = 'Empty List';
  booksContainer.setAttribute('style', 'text-align:center');
}

const removeBtns = document.querySelectorAll('.btn-remove');
removeBtns.forEach((btn) => {
  removeBook(btn);
});

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    document.querySelectorAll('nav a').forEach((link) => {
      link.classList.remove('active');
    });
    document.querySelectorAll('section').forEach((section) => {
      section.classList.remove('active');
    });

    link.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

const currentDate = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

const formattedDate = currentDate.toLocaleString('en-US', options);

document.querySelector('.time').innerHTML = formattedDate;