import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/existance/registrar.service';
import { RecordOfExistance } from 'src/app/existance/record-of-existance';

@Component({
  selector: 'app-time-machine',
  templateUrl: './time-machine.component.html',
  styleUrls: ['./time-machine.component.scss']
})
export class TimeMachineComponent implements OnInit {
  active = false;
  completeWasteOfEffort = 0;
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  influence(index: number, event) {
    if (event.shiftKey) {
      this.registrar.influence(index, 10);
    } else if (event.ctrlKey) {
        this.registrar.influence(index, 25);
    } else {
        this.registrar.influence(index);
    }
  }

  async testItOnAPocketWatch() {
    this.completeWasteOfEffort = 1;
    for (this.completeWasteOfEffort; this.completeWasteOfEffort < 101; this.completeWasteOfEffort++) {
      await this.delayTheInevitable(this.registrar.record.dejaVu + 1, 60);
    }
    this.completeWasteOfEffort = 0;
    this.registrar.record.brokenPocketWatches++;
    this.registrar.recordPitifulExistance();
  }

  async ascendTheThirdDimension() {
    this.completeWasteOfEffort = 1;
    for (this.completeWasteOfEffort; this.completeWasteOfEffort < 101; this.completeWasteOfEffort++) {
      await this.delayTheInevitable(this.registrar.record.dejaVu + 1, 360);
    }
    this.completeWasteOfEffort = 0;
    this.active = true;
    this.record.triggerTimeMachine = true;
    this.registrar.recordPitifulExistance();
  }

  private delayTheInevitable(dejaVu: number, time: number) {
    if (dejaVu > 1) {
      return new Promise(resolve => setTimeout(resolve, (time * 1000 / dejaVu)));
    }
    return new Promise(resolve => setTimeout(resolve, 1000 * time));
  }

}
