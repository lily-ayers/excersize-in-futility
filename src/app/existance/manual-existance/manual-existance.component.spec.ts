import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualExistanceComponent } from './manual-existance.component';

describe('ClickerBoxComponent', () => {
  let component: ManualExistanceComponent;
  let fixture: ComponentFixture<ManualExistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualExistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualExistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
