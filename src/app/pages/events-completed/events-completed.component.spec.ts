import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCompletedComponent } from './events-completed.component';

describe('EventsCompletedComponent', () => {
  let component: EventsCompletedComponent;
  let fixture: ComponentFixture<EventsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
