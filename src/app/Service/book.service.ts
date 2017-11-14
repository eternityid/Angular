import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../Model/book';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ServiceBook {

  urlAPI = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: Http) { }
  ngOnInit() {
  }

  onSearch(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.urlAPI}?q=${queryTitle}`)
      .map(res => res.json().items || [])
  }

  onDetail(bookID: string): Observable<Book> {
    return this.http.get(`${this.urlAPI}/${bookID}`)
    .map(res => res.json())
   }
}
