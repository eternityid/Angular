import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../Model/book';
import { ServiceBook } from '../Service/book.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookDetail: Book;
  constructor(
    private http: Http,
    private service: ServiceBook,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.onDetail(id)
      .subscribe(res => {
        this.bookDetail = res;
      })
  }
}
