import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from '../record-of-existance';
import { RegistrarService } from '../registrar.service';
import { MultiplyAnguishService } from 'src/app/existance/multiply-anguish.service';
import { SadboiAdvanceService } from 'src/app/sadboi-advance/sadboi-advance.service';
import { responses } from 'src/assets/multiply-responses.json';
@Component({
  selector: 'app-existance-efficiency-modifier',
  templateUrl: './existance-efficiency-modifier.component.html',
  styleUrls: ['./existance-efficiency-modifier.component.scss']
})
export class ExistanceEfficiencyModifierComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService, private multiply: MultiplyAnguishService,
              private sadboi: SadboiAdvanceService) { }

  ngOnInit() {
  }

  accumulate(index: number, event) {
    let mult = 1;
    if (event.shiftKey) {
      mult = 10;
    } else if (event.ctrlKey) {
      mult = 25;
    }
    const transaction = this.registrar.accumulate(index, mult);
    if (!this.sadboi.activateGame && this.record.triggerMarriage && transaction) {
      this.sadboi.consoleHistory.push({ message: responses[Math.floor(Math.random() * responses.length)] });
    }
    if (mult === 1) {
      this.record.multiplierPrices[index] = Math.floor(this.record.multiplierBasePrices[index]
        * Math.pow(1.1, this.record.multipliersOwned[index]));
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
