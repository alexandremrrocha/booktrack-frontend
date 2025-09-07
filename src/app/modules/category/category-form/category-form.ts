import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css'
})
export class CategoryForm {
  form!: FormGroup;
  id!: number | null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;

    if (this.id) {
      this.loadCategories();
    }
  }

  public async loadCategories() {
    const category = await this.categoryService.getById(this.id!);  
    this.form.patchValue(category);
  }

  public async saveCategory() {
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
        await this.categoryService.update(this.id, this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Categoria atualizada!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/categories'])
      } else {
        await this.categoryService.create(this.form.value);
        Swal.fire({
          icon: 'success',
          title: 'Categoria salva!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/categories']);
      }      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro inesperado',
        text: 'Não foi possível salvar a categoria.'
      }); 
    }    
  }
}
