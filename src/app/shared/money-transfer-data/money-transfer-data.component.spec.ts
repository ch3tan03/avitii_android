import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferDataComponent } from './money-transfer-data.component';

describe('MoneyTransferDataComponent', () => {
  let component: MoneyTransferDataComponent;
  let fixture: ComponentFixture<MoneyTransferDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTransferDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransferDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
