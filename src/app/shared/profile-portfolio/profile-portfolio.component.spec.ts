import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePortfolioComponent } from './profile-portfolio.component';

describe('ProfilePortfolioComponent', () => {
  let component: ProfilePortfolioComponent;
  let fixture: ComponentFixture<ProfilePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
