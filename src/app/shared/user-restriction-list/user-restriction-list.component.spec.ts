import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestrictionListComponent } from './user-restriction-list.component';

describe('UserRestrictionListComponent', () => {
  let component: UserRestrictionListComponent;
  let fixture: ComponentFixture<UserRestrictionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestrictionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestrictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
