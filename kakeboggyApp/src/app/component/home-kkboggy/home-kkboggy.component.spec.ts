import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKkboggyComponent } from './home-kkboggy.component';

describe('HomeKkboggyComponent', () => {
  let component: HomeKkboggyComponent;
  let fixture: ComponentFixture<HomeKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
