import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestrictionDetailsComponent } from './user-restriction-details.component';

describe('UserRestrictionDetailsComponent', () => {
  let component: UserRestrictionDetailsComponent;
  let fixture: ComponentFixture<UserRestrictionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestrictionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestrictionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
