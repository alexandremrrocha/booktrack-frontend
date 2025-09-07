import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryModel } from '../../../models/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList implements OnInit {
  private categoryService = inject(CategoryService); 
  categories: CategoryModel[] = [];

  ngOnInit(): void {
    this.loadCategories();
  }

  public async loadCategories() {
    this.categories = await this.categoryService.getAll();  
  }

  public async deleteCategory(id: number) {
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
      await this.categoryService.delete(id);
      await this.loadCategories();
      Swal.fire({
        title: 'Excluído!',
        text: 'A categoria foi removida com sucesso.',
        icon: 'success',
        confirmButtonColor: '#4caf50'
      });
    }
  }
}
