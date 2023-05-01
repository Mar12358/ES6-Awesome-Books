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