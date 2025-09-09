import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByCategoryChartComponent } from './books-by-category-chart';

describe('BooksByCategoryChartComponent', () => {
  let component: BooksByCategoryChartComponent;
  let fixture: ComponentFixture<BooksByCategoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksByCategoryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
