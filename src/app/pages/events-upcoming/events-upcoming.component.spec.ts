import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUpcomingComponent } from './events-upcoming.component';

describe('EventsUpcomingComponent', () => {
  let component: EventsUpcomingComponent;
  let fixture: ComponentFixture<EventsUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsUpcomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
