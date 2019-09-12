import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistressDispensaryComponent } from './distress-dispensary.component';

describe('DistressDispensaryComponent', () => {
  let component: DistressDispensaryComponent;
  let fixture: ComponentFixture<DistressDispensaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistressDispensaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistressDispensaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
