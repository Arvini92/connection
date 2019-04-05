import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleFormComponent } from './middle-form.component';

describe('MiddleFormComponent', () => {
  let component: MiddleFormComponent;
  let fixture: ComponentFixture<MiddleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
