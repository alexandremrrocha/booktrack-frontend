import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStatusChart } from './book-status-chart';

describe('BookStatusChart', () => {
  let component: BookStatusChart;
  let fixture: ComponentFixture<BookStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
