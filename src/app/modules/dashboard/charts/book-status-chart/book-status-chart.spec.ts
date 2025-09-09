import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStatusChartComponent } from './book-status-chart';

describe('BookStatusChartComponent', () => {
  let component: BookStatusChartComponent;
  let fixture: ComponentFixture<BookStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStatusChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
