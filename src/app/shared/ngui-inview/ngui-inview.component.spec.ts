import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguiInviewComponent } from './ngui-inview.component';

describe('NguiInviewComponent', () => {
  let component: NguiInviewComponent;
  let fixture: ComponentFixture<NguiInviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguiInviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguiInviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
