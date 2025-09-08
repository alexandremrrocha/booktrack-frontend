import { Component } from '@angular/core';
import { BookStatusChartComponent } from "./charts/book-status-chart/book-status-chart";
import { BooksByCategoryChartComponent } from "./charts/books-by-category-chart/books-by-category-chart";
import { BooksByAuthorChartComponent } from "./charts/books-by-author-chart/books-by-author-chart";

@Component({
  selector: 'app-dashboard',
  imports: [BookStatusChartComponent, BooksByCategoryChartComponent, BooksByAuthorChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}
