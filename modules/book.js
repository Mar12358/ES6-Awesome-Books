export default class Book {
  constructor() {
    this.localStorage = localStorage;
  }

  getLocalStorage() {
    const savedBookData = this.localStorage.getItem('books-data');
    const data = savedBookData ? JSON.parse(savedBookData) : [];
    return data;
  }

  setLocalStorage(data) {
    this.localStorage.setItem('books-data', JSON.stringify(data))
  }

  addBook(bookDetails) {
    const data = this.getLocalStorage();
    bookDetails.id = data.length + 1;
    data.push(bookDetails);
    this.setLocalStorage(data);
  }
  
  removeBook(id) {
    const data = this.getLocalStorage().filter((e) => e.id !== id);
    this.setLocalStorage(data);
  }
}