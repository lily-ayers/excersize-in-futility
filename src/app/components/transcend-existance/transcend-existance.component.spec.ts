import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscendExistanceComponent } from './transcend-existance.component';

describe('TranscendExistanceComponent', () => {
  let component: TranscendExistanceComponent;
  let fixture: ComponentFixture<TranscendExistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscendExistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscendExistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
