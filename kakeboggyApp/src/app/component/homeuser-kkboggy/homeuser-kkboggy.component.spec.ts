import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeuserKkboggyComponent } from './homeuser-kkboggy.component';

describe('HomeuserKkboggyComponent', () => {
  let component: HomeuserKkboggyComponent;
  let fixture: ComponentFixture<HomeuserKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeuserKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeuserKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
