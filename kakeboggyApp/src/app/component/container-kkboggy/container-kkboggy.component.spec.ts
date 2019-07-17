import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerKkboggyComponent } from './container-kkboggy.component';

describe('ContainerKkboggyComponent', () => {
  let component: ContainerKkboggyComponent;
  let fixture: ComponentFixture<ContainerKkboggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerKkboggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerKkboggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
