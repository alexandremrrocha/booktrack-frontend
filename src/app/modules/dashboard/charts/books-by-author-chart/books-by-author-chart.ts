import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { BookService } from '../../../../services/book/book.service';

Chart.register(...registerables);

@Component({
  selector: 'app-books-by-author-chart',
  standalone: true,
  template: `<canvas id="booksByAuthorChart"></canvas>`,
})
export class BooksByAuthorChartComponent implements OnInit {
  constructor(private bookService: BookService) {}

  async ngOnInit() {
    const books = await this.bookService.getAll();

    const authorCount: Record<string, number> = {};
    books.forEach(book => {
      const authorName = book.author?.name || 'Sem autor';
      authorCount[authorName] = (authorCount[authorName] || 0) + 1;
    });

    const sorted = Object.entries(authorCount).sort((a, b) => b[1] - a[1]);

    const top10 = sorted.slice(0, 10);
    const outros = sorted.slice(10);
    if (outros.length > 0) {
      const outrosTotal = outros.reduce((sum, [, count]) => sum + count, 0);
      top10.push(['Outros', outrosTotal]);
    }

    const labels = top10.map(([author]) => author);
    const data = top10.map(([, count]) => count);


    new Chart('booksByAuthorChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Quantidade de livros',
            data,
            backgroundColor: '#4caf50',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        indexAxis: 'y',       
        scales: { x: { beginAtZero: true } }
      },
    });
  }
}
