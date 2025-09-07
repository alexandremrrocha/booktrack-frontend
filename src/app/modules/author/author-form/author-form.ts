import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthorService } from '../../../services/author/author.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './author-form.html',
  styleUrl: './author-form.css'
})
export class AuthorForm implements OnInit {
  form!: FormGroup;
  id!: number | null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required]
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;

    if (this.id) {
      this.loadAuthor();
    }
  }

  public async loadAuthor() {
    const author = await this.authorService.getById(this.id!);  
    this.form.patchValue(author);
  }

  public async saveAuthor() {
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
        await this.authorService.update(this.id, this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Autor atualizado!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/authors'])
      } else {
        await this.authorService.create(this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Autor salvo!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/authors']);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro inesperado',
        text: 'Não foi possível salvar o autor.'
      }); 
    }
    
  }
}
