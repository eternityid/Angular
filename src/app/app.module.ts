import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookComponent } from './book/book.component';
import { ServiceBook } from './Service/book.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionModule } from './mission/mission.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'book', component: BookComponent },
  { path: 'mission', loadChildren: './mission/mission.module#MissionModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    BookListComponent,
    BookSearchComponent,
    BookComponent,
    BookDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MissionModule
  ],
  providers: [
    ServiceBook
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
