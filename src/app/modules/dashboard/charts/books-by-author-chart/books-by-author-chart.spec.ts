import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByAuthorChart } from './books-by-author-chart';

describe('BooksByAuthorChart', () => {
  let component: BooksByAuthorChart;
  let fixture: ComponentFixture<BooksByAuthorChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksByAuthorChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByAuthorChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
