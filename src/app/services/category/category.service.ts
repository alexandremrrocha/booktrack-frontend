import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<CategoryModel[]> {
    return await firstValueFrom(this.http.get<CategoryModel[]>(this.apiUrl));
  }

  async getById(id: number): Promise<CategoryModel> {
    return await firstValueFrom(this.http.get<CategoryModel>(`${this.apiUrl}/${id}`));
  }

  async create(category: CategoryModel): Promise<CategoryModel> {
    return await firstValueFrom(this.http.post<CategoryModel>(this.apiUrl, category));
  }

  async update(id: number, category: CategoryModel): Promise<CategoryModel> {
    return await firstValueFrom(this.http.patch<CategoryModel>(`${this.apiUrl}/${id}`, category));
  }

  async delete(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
  }
}
