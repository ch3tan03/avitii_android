import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBorrowerComponent } from './search-borrower.component';

describe('SearchBorrowerComponent', () => {
  let component: SearchBorrowerComponent;
  let fixture: ComponentFixture<SearchBorrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBorrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
