import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistanceStatusComponent } from './existance-status.component';

describe('ExistanceStatusComponent', () => {
  let component: ExistanceStatusComponent;
  let fixture: ComponentFixture<ExistanceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistanceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistanceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
