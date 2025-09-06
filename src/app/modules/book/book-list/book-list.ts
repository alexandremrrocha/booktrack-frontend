import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { BookModel } from '../../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList implements OnInit{
  private bookService = inject(BookService); 
  books: BookModel[] = [];

  ngOnInit(): void {
    this.loadBooks();
  }

  public async loadBooks() {
    this.books = await this.bookService.getAll();  
  }

  public async deleteBook(id: number) {
    await this.bookService.delete(id);
  }

}
