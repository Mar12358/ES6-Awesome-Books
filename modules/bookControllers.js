import { book } from "../index.js";
import div from "./div.js";

export const createRemove = (id) => {
  const btnRemove = document.createElement('button');
  btnRemove.id = `${id}`;
  btnRemove.type = 'button';
  btnRemove.className = 'btn-remove';
  const btnText = document.createTextNode('Remove');
  btnRemove.appendChild(btnText);
  return btnRemove;
};

export const addBookToList = (book) => {
  const bookItemDiv = div('div');
  bookItemDiv.className = `book-item item${book.id}`;
  const titleDiv = div('div', `"${book.title}" by ${book.author}`);
  bookItemDiv.appendChild(titleDiv);
  const btnRemove = createRemove(book.id);
  bookItemDiv.appendChild(btnRemove);
  return { bookItemDiv, btnRemove };
};

const removeContent = (text) => {
  const element = document.querySelector(text);
  element.remove();
};

const removeBook = (btn) => {
  btn.addEventListener('click', (event) => {
    book.removeBook(Number(event.target.id));
    removeContent(`.item${event.target.id}`);
  });
};