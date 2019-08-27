import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscendExistanceComponent } from './ascend-existance.component';

describe('AscendExistanceComponent', () => {
  let component: AscendExistanceComponent;
  let fixture: ComponentFixture<AscendExistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscendExistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscendExistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
