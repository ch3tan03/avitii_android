import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerEarningsComponent } from './borrower-earnings.component';

describe('BorrowerEarningsComponent', () => {
  let component: BorrowerEarningsComponent;
  let fixture: ComponentFixture<BorrowerEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
