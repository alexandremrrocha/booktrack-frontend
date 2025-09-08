import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByCategoryChart } from './books-by-category-chart';

describe('BooksByCategoryChart', () => {
  let component: BooksByCategoryChart;
  let fixture: ComponentFixture<BooksByCategoryChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksByCategoryChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByCategoryChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
