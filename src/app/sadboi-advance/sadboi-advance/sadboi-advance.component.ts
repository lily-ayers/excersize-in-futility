import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SadboiMessage } from 'src/app/sadboi-advance/sadboi-message';
import { SadboiAdvanceService } from 'src/app/sadboi-advance/sadboi-advance.service';
import { trigger, style, state, transition, animate, group, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-sadboi-advance',
  templateUrl: './sadboi-advance.component.html',
  styleUrls: ['./sadboi-advance.component.scss'],
  animations: [
    trigger('statChange', [
      transition(':increment', [
        query(':self',
          stagger(300, [
            animate('10ms ease-in', style({
              backgroundColor: 'blue',
              opacity: 1
            })),
            animate('1000ms ease-out', style({
              backgroundColor: 'blue',
              opacity: 0
            }))
          ])
        )]
      ),
      transition(':decrement', [
        query(':self',
          stagger(300, [
            animate('10ms ease-in', style({
              backgroundColor: 'red',
              opacity: 1
            })),
            animate('1000ms ease-out', style({
              backgroundColor: 'red',
              opacity: 0
            }))
          ])
        )]
      ),
    ])
  ]
})
export class SadboiAdvanceComponent implements OnInit {
  @Input() record;
  sadboiConsoleInput = new FormControl('');

  constructor(public sadboi: SadboiAdvanceService) { }

  ngOnInit() {
  }

  submit() {
    if (!this.sadboi.instance) {
      this.sadboi.submit(this.sadboiConsoleInput.value.toString());
    } else {
      this.sadboi.submitInstance(this.sadboiConsoleInput.value.toString());
    }
    this.sadboiConsoleInput.setValue('');
  }

  autoFill(input: string) {
    this.sadboiConsoleInput.setValue(input);
    this.submit();
  }
}
