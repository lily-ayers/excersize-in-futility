import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistanceEfficiencyModifierComponent } from './existance-efficiency-modifier.component';

describe('ExistanceEfficiencyModifierComponent', () => {
  let component: ExistanceEfficiencyModifierComponent;
  let fixture: ComponentFixture<ExistanceEfficiencyModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistanceEfficiencyModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistanceEfficiencyModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
