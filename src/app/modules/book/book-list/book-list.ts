import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { BookModel } from '../../../models/book.model';
import Swal from 'sweetalert2';

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
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter essa ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4caf50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if(result.isConfirmed){
      await this.bookService.delete(id);
      await this.loadBooks();
      Swal.fire({
        title: 'Excluído!',
        text: 'O livro foi removido com sucesso.',
        icon: 'success',
        confirmButtonColor: '#4caf50'
      });
    }
  }

}
