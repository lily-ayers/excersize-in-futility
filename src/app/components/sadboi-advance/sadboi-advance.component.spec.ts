import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadboiAdvanceComponent } from './sadboi-advance.component';

describe('SadboiAdvanceComponent', () => {
  let component: SadboiAdvanceComponent;
  let fixture: ComponentFixture<SadboiAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadboiAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadboiAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
