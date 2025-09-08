import { Routes } from '@angular/router';
import { AuthorList } from './modules/author/author-list/author-list';
import { AuthorForm } from './modules/author/author-form/author-form';
import { BookList } from './modules/book/book-list/book-list';
import { BookForm } from './modules/book/book-form/book-form';
import { CategoryList } from './modules/category/category-list/category-list';
import { CategoryForm } from './modules/category/category-form/category-form';
import { DashboardComponent } from './modules/dashboard/dashboard';

export const routes: Routes = [
  { path: 'authors', component: AuthorList },
  { path: 'authors/new', component: AuthorForm },
  { path: 'authors/edit/:id', component: AuthorForm },
  { path: 'books', component: BookList },
  { path: 'books/new', component: BookForm },
  { path: 'books/edit/:id', component: BookForm },
  { path: 'categories', component: CategoryList },
  { path: 'categories/new', component: CategoryForm },
  { path: 'categories/edit/:id', component: CategoryForm },
  { path: 'dashboards', component: DashboardComponent },

  { path: '', redirectTo: '/authors', pathMatch: 'full' }
];
