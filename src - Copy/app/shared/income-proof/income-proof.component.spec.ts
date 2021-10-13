import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeProofComponent } from './income-proof.component';

describe('IncomeProofComponent', () => {
  let component: IncomeProofComponent;
  let fixture: ComponentFixture<IncomeProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
