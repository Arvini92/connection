import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesControllersComponent } from './routes-controllers.component';

describe('RoutesControllersComponentComponent', () => {
  let component: RoutesControllersComponent;
  let fixture: ComponentFixture<RoutesControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
