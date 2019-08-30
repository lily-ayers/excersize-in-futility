import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SadboiMessage } from 'src/app/sadboi-message';
import { SadboiAdvanceService } from 'src/app/sadboi-advance.service';

@Component({
  selector: 'app-sadboi-advance',
  templateUrl: './sadboi-advance.component.html',
  styleUrls: ['./sadboi-advance.component.scss']
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
