import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendNowComponent } from './lend-now.component';

describe('LendNowComponent', () => {
  let component: LendNowComponent;
  let fixture: ComponentFixture<LendNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
