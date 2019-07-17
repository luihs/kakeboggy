import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavhomeKkboggyComponent } from './navhome-kkboggy.component';

describe('NavhomeKkboggyComponent', () => {
  let component: NavhomeKkboggyComponent;
  let fixture: ComponentFixture<NavhomeKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavhomeKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavhomeKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
