import { Injectable } from '@angular/core';
import { AuthorModel } from '../../models/author.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:3000/author';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<AuthorModel[]> {
    return await firstValueFrom(this.http.get<AuthorModel[]>(this.apiUrl));
  }

  async getById(id: number): Promise<AuthorModel> {
    return await firstValueFrom(this.http.get<AuthorModel>(`${this.apiUrl}/${id}`));
  }

  async create(author: AuthorModel): Promise<AuthorModel> {
    return await firstValueFrom(this.http.post<AuthorModel>(this.apiUrl, author));
  }

  async update(id: number, author: AuthorModel): Promise<AuthorModel> {
    return await firstValueFrom(this.http.patch<AuthorModel>(`${this.apiUrl}/${id}`, author));
  }

  async delete(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
  }
}
