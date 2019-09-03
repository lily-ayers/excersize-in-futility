import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadboiColorComponent } from './sadboi-color.component';

describe('SadboiColorComponent', () => {
  let component: SadboiColorComponent;
  let fixture: ComponentFixture<SadboiColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadboiColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadboiColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
