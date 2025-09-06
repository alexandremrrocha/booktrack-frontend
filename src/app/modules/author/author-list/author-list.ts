import { Component, inject, OnInit } from '@angular/core';
import { AuthorModel } from '../../../models/author.model';
import { AuthorService } from '../../../services/author/author.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    await this.authorService.delete(id);
  }

}
