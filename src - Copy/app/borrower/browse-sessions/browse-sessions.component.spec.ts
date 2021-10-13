import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSessionsComponent } from './browse-sessions.component';

describe('BrowseSessionsComponent', () => {
  let component: BrowseSessionsComponent;
  let fixture: ComponentFixture<BrowseSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
