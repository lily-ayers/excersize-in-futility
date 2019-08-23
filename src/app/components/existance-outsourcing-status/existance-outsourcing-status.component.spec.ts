import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistanceOutsourcingStatusComponent } from './existance-outsourcing-status.component';

describe('ExistanceOutsourcingStatusComponent', () => {
  let component: ExistanceOutsourcingStatusComponent;
  let fixture: ComponentFixture<ExistanceOutsourcingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistanceOutsourcingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistanceOutsourcingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
