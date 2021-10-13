import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaProccessComponent } from './media-proccess.component';

describe('MediaProccessComponent', () => {
  let component: MediaProccessComponent;
  let fixture: ComponentFixture<MediaProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaProccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
