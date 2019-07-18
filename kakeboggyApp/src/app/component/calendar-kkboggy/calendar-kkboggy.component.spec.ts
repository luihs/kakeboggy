import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarKkboggyComponent } from './calendar-kkboggy.component';

describe('CalendarKkboggyComponent', () => {
  let component: CalendarKkboggyComponent;
  let fixture: ComponentFixture<CalendarKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
