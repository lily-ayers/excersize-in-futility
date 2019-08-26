import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';
import { RecordOfExistance } from 'src/app/record-of-existance';

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

  influence(influencee: string) {
    switch (influencee) {
      case 'nietzsche':
        this.registrar.cloneTheFirstLoserYouThinkOf();
        break;
      case 'beckett':
        this.registrar.cloneSomeoneLessLame();
        break;
      case 'sartre':
        this.registrar.cloneSomeoneLessSexist();
        break;
      default:
        break;
    }
  }

  async testItOnAPocketWatch() {
    this.completeWasteOfEffort = 1;
    for (this.completeWasteOfEffort; this.completeWasteOfEffort < 101; this.completeWasteOfEffort++) {
      await this.delayTheInevitable(this.registrar.record.dejaVu + 1, 1200);
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
    this.registrar.recordPitifulExistance();
  }

  private delayTheInevitable(dejaVu: number, time: number) {
    if (dejaVu > 1) {
      return new Promise(resolve => setTimeout(resolve, (time * 1000 / dejaVu)));
    }
    return new Promise(resolve => setTimeout(resolve, 1000 * time));
  }

}
