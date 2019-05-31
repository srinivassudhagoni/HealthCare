import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableslotComponent } from './availableslot.component';

describe('AvailableslotComponent', () => {
  let component: AvailableslotComponent;
  let fixture: ComponentFixture<AvailableslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
