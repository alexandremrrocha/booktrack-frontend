import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryModel } from '../../../models/category.model';

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

  public async deleteAuthor(id: number) {
    await this.categoryService.delete(id);
  }
}
