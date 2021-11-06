import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementPendingComponent } from './user-management-pending.component';

describe('UserManagementPendingComponent', () => {
  let component: UserManagementPendingComponent;
  let fixture: ComponentFixture<UserManagementPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
