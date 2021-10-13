import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowNowComponent } from './borrow-now.component';

describe('BorrowNowComponent', () => {
  let component: BorrowNowComponent;
  let fixture: ComponentFixture<BorrowNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
