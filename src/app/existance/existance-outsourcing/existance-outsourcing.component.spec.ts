import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistanceOutsourcingComponent } from './existance-outsourcing.component';

describe('ExistanceOutsourcingComponent', () => {
  let component: ExistanceOutsourcingComponent;
  let fixture: ComponentFixture<ExistanceOutsourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistanceOutsourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistanceOutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
