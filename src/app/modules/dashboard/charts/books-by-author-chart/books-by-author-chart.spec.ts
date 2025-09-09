import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByAuthorChartComponent } from './books-by-author-chart';

describe('BooksByAuthorChartComponent', () => {
  let component: BooksByAuthorChartComponent;
  let fixture: ComponentFixture<BooksByAuthorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksByAuthorChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByAuthorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
