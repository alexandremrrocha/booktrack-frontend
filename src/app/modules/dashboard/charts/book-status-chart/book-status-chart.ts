import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { BookService } from '../../../../services/book/book.service';
import { BookStatus } from '../../../book/book-status.enum';

Chart.register(...registerables);

@Component({
  selector: 'app-book-status-chart',
  standalone: true,
  template: `<canvas id="bookStatusChart"></canvas>`,
})
export class BookStatusChartComponent implements OnInit {
  constructor(private bookService: BookService) {}

  async ngOnInit() {
    const listBooks = await this.bookService.getAll();
    
    const statusCount = {
      TO_READ: listBooks.filter(b => b.status === BookStatus.TO_READ).length,
      READING: listBooks.filter(b => b.status === BookStatus.READING).length,
      READ: listBooks.filter(b => b.status === BookStatus.READ).length,
    };

    new Chart('bookStatusChart', {
      type: 'doughnut' as ChartType,
      data: {
        labels: ['Para Ler', 'Lendo', 'Lido'],
        datasets: [{
          data: Object.values(statusCount),
          backgroundColor: ['#f44336', '#ff9800', '#4caf50'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }
}
