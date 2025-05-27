import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsActiveComponent } from './events-active.component';

describe('EventsActiveComponent', () => {
  let component: EventsActiveComponent;
  let fixture: ComponentFixture<EventsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
