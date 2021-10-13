import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypesAddComponent } from './service-types-add.component';

describe('ServiceTypesAddComponent', () => {
  let component: ServiceTypesAddComponent;
  let fixture: ComponentFixture<ServiceTypesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
