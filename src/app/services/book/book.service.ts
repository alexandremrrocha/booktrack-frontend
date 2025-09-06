import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/book';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<BookModel[]> {
    return await firstValueFrom(this.http.get<BookModel[]>(this.apiUrl));
  }

  async getById(id: number): Promise<BookModel> {
    return await firstValueFrom(this.http.get<BookModel>(`${this.apiUrl}/${id}`));
  }

  async create(book: BookModel): Promise<BookModel> {
    return await firstValueFrom(this.http.post<BookModel>(this.apiUrl, book));
  }

  async update(id: number, book: BookModel): Promise<BookModel> {
    return await firstValueFrom(this.http.patch<BookModel>(`${this.apiUrl}/${id}`, book));
  }

  async delete(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
  }
}
