import { Component, inject, OnInit } from '@angular/core';
import { AuthorModel } from '../../../models/author.model';
import { AuthorService } from '../../../services/author/author.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './author-list.html',
  styleUrl: './author-list.css'
})
export class AuthorList implements OnInit {
  private authorService = inject(AuthorService); 
  authors: AuthorModel[] = [];

  ngOnInit(): void {
    this.loadAuthors();
  }

  public async loadAuthors() {
    this.authors = await this.authorService.getAll();  
  }

  public async deleteAuthor(id: number) {
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

    if (result.isConfirmed) {
      await this.authorService.delete(id);
      await this.loadAuthors(); 
      Swal.fire({
        title: 'Excluído!',
        text: 'O autor foi removido com sucesso.',
        icon: 'success',
        confirmButtonColor: '#4caf50'
      });
    }
  }

}
