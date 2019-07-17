import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavindexKkboggyComponent } from './navindex-kkboggy.component';

describe('NavindexKkboggyComponent', () => {
  let component: NavindexKkboggyComponent;
  let fixture: ComponentFixture<NavindexKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavindexKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavindexKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
