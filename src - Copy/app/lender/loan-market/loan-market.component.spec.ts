import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanMarketComponent } from './loan-market.component';

describe('LoanMarketComponent', () => {
  let component: LoanMarketComponent;
  let fixture: ComponentFixture<LoanMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
