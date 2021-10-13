import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetALoanComponent } from './get-a-loan.component';

describe('GetALoanComponent', () => {
  let component: GetALoanComponent;
  let fixture: ComponentFixture<GetALoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetALoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetALoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
