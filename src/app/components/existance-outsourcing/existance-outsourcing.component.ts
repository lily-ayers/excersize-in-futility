import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';
import { RegistrarService } from 'src/app/registrar.service';
import { MultiplyAnguishService } from 'src/app/multiply-anguish.service';

@Component({
  selector: 'app-existance-outsourcing',
  templateUrl: './existance-outsourcing.component.html',
  styleUrls: ['./existance-outsourcing.component.scss']
})
export class ExistanceOutsourcingComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService, private multiply: MultiplyAnguishService) { }

  ngOnInit() {
  }

  influence(index: number, event) {
    let mult = 1;
    if (event.shiftKey) {
      mult = 10;
    } else if (event.ctrlKey) {
      mult = 25;
    }
    this.registrar.influence(index, mult);
    if (mult === 1) {
      this.record.influencePrices[index] = Math.floor(this.record.influenceBasePrices[index]
        * Math.pow(1.1, this.record.influenced[index]));
    } else if (mult === 10) {
      const tempEvent = new KeyboardEvent('onkeydown', {code: 'ShiftLeft'});
      this.multiply.onUnMultiply();
      this.multiply.onMultiply(tempEvent);
    } else if (mult === 25) {
      const tempEvent = new KeyboardEvent('onkeydown', {code: 'ControlLeft'});
      this.multiply.onUnMultiply();
      this.multiply.onMultiply(tempEvent);
    }
  }
}
