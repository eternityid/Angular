import { Component, OnInit } from '@angular/core';
import { ServiceBook } from '../Service/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];
  constructor(private service:ServiceBook) { }

  ngOnInit() {
  }

  search(data:string){
    this.service.onSearch(data).subscribe(res => {
      this.books=res;
    })
  }

}
