import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { AuthorModel } from '../../../models/author.model';
import { CategoryModel } from '../../../models/category.model';
import { AuthorService } from '../../../services/author/author.service';
import { CategoryService } from '../../../services/category/category.service';
import { BookStatus, BookStatusList } from '../book-status.enum';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgSelectModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm {
  form!: FormGroup;
  id!: number | null;
  authors: AuthorModel[] = [];
  categories: CategoryModel[] = [];
  bookStatusList = BookStatusList; 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      pages: ['', Validators.required],
      authorId: [0, Validators.required],
      categoryId: [0, Validators.required]
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;
    
    [this.authors, this.categories] = await Promise.all([
      this.authorService.getAll(),
      this.categoryService.getAll()
    ]); 
    
    if (this.id) {
      this.loadBook();          
    }
  }

  public async loadBook() {
    const book = await this.bookService.getById(this.id!);  
    this.form.patchValue(book);
  }

  public async saveBook() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Erro de validação',
        html: 'Preencha todos os campos'
      });
      return
    }

    try {
      if (this.id){
        await this.bookService.update(this.id, this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Livro atualizado!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/books'])
      } else {
        await this.bookService.create(this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Livro salvo!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/books']);
      }      
    } catch (error: any) {              
      Swal.fire({
        icon: 'error',
        title: 'Erro inesperado',
        text: 'Não foi possível salvar o livro.'
      });      
    }    
  }
}
