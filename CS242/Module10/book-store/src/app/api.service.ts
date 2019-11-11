import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_CARD_API = 'http://localhost:8080/birthdaycard';
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_CARDS_API = 'http://localhost:8080/birthdaycards';
  private FETCH_BOOK_API = 'http://localhost:8080/book'
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;

; 

  constructor(private httpClient: HttpClient) { }

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  fetchBirthdaycards() {
    return this.httpClient.get(this.FETCH_CARDS_API);
  } 

  addOrUpdateBook(
  book: { title: string; isbn: string; author: string; picture: string; price: number, _id: null | string }) {
    if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

// addNewBook(book: { title: string; isbn: string; author: string; picture: string; price: number }) {
//     return this.httpClient.post(this.ADD_NEW_BOOK_API, book);}

  addNewBirthCard(card: { title: string; material: string; picture: string; price: number }) {
    return this.httpClient.post(this.ADD_NEW_CARD_API, card);
  }

  deleteBook(id: string) {
  return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
}
}