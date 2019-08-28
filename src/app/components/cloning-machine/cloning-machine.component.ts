import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';
import { RecordOfExistance } from 'src/app/record-of-existance';

@Component({
  selector: 'app-cloning-machine',
  templateUrl: './cloning-machine.component.html',
  styleUrls: ['./cloning-machine.component.scss']
})
export class CloningMachineComponent implements OnInit {
  active = false;
  ultimatelyPointlessExertion = 0;
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

  async createLife() {
    this.ultimatelyPointlessExertion = 1;
    for (this.ultimatelyPointlessExertion; this.ultimatelyPointlessExertion < 101; this.ultimatelyPointlessExertion++) {
      await this.delayTheInevitable(this.registrar.record.dejaVu + 1, .1);
    }
    this.ultimatelyPointlessExertion = 0;
    this.registrar.record.clones++;
    this.registrar.recordPitifulExistance();
  }

  async defyNature() {
    this.ultimatelyPointlessExertion = 1;
    for (this.ultimatelyPointlessExertion; this.ultimatelyPointlessExertion < 101; this.ultimatelyPointlessExertion++) {
      await this.delayTheInevitable(this.registrar.record.dejaVu + 1, 10);
    }
    this.ultimatelyPointlessExertion = 0;
    this.active = true;
    this.registrar.recordPitifulExistance();
  }

  private delayTheInevitable(dejaVu: number, time: number) {
    if (dejaVu > 1) {
      return new Promise(resolve => setTimeout(resolve, (1000 * time / dejaVu)));
    }
    return new Promise(resolve => setTimeout(resolve, 1000 * time));
  }
}
