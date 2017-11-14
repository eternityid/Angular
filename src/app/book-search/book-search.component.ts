import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @Output()
  queryChange = new EventEmitter<string>();

  query:string;

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.queryChange.emit(this.query);
  }

}
