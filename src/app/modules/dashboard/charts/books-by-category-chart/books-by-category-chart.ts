import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { BookService } from '../../../../services/book/book.service';

Chart.register(...registerables);

@Component({
  selector: 'app-books-by-category-chart',
  standalone: true,
  template: `<canvas id="booksByCategoryChart"></canvas>`,
})
export class BooksByCategoryChartComponent implements OnInit {
  constructor(private bookService: BookService) {}

  async ngOnInit() {
    const books = await this.bookService.getAll();

    const categoryMap: Record<string, number> = {};
    books.forEach(book => {
      const category = book.category?.name || 'Sem categoria';
      categoryMap[category] = (categoryMap[category] || 0) + 1;
    });

    new Chart('booksByCategoryChart', {
      type: 'bar' as ChartType,
      data: {
        labels: Object.keys(categoryMap),
        datasets: [{
          label: 'Qtd. de Livros',
          data: Object.values(categoryMap),
          backgroundColor: '#4caf50',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
}
