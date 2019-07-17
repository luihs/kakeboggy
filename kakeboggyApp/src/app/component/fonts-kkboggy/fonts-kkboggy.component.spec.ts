import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsKkboggyComponent } from './fonts-kkboggy.component';

describe('FontsKkboggyComponent', () => {
  let component: FontsKkboggyComponent;
  let fixture: ComponentFixture<FontsKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
