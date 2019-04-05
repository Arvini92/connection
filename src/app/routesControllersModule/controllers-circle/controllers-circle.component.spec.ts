import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllersCircleComponent } from './controllers-circle.component';

describe('ControllersCircleComponent', () => {
  let component: ControllersCircleComponent;
  let fixture: ComponentFixture<ControllersCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllersCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllersCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
