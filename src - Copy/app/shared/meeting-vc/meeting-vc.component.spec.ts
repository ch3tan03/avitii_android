import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingVcComponent } from './meeting-vc.component';

describe('MeetingVcComponent', () => {
  let component: MeetingVcComponent;
  let fixture: ComponentFixture<MeetingVcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingVcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
