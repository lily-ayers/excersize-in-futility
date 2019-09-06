import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/existance/record-of-existance';
import { RegistrarService } from 'src/app/existance/registrar.service';
import { MultiplyAnguishService } from 'src/app/existance/multiply-anguish.service';
import { responses } from 'src/assets/outsourcing-responses.json';
import { SadboiAdvanceService } from 'src/app/sadboi-advance/sadboi-advance.service';

@Component({
  selector: 'app-existance-outsourcing',
  templateUrl: './existance-outsourcing.component.html',
  styleUrls: ['./existance-outsourcing.component.scss']
})
export class ExistanceOutsourcingComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService, private multiply: MultiplyAnguishService,
              private sadboi: SadboiAdvanceService) { }

  ngOnInit() {
  }

  influence(index: number, event) {
    let mult = 1;
    if (event.shiftKey) {
      mult = 10;
    } else if (event.ctrlKey) {
      mult = 25;
    }
    const transaction = this.registrar.influence(index, mult);
    if (!this.sadboi.activateGame && this.record.triggerMarriage && transaction) {
      this.sadboi.consoleHistory.push({ message: responses[Math.floor(Math.random() * responses.length)] });
    }
    ;
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
