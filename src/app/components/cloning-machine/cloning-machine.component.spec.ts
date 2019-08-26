import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloningMachineComponent } from './cloning-machine.component';

describe('CloningMachineComponent', () => {
  let component: CloningMachineComponent;
  let fixture: ComponentFixture<CloningMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloningMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloningMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
