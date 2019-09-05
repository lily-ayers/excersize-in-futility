import { Component, OnInit, Inject, Input } from '@angular/core';
import { RegistrarService } from 'src/app/existance/registrar.service';
import { RecordOfExistance } from 'src/app/existance/record-of-existance';

@Component({
  selector: 'app-manual-existance',
  templateUrl: './manual-existance.component.html',
  styleUrls: ['./manual-existance.component.scss']
})
export class ManualExistanceComponent implements OnInit {
  @Input() record: RecordOfExistance;
  // Percentage tracker for progress bar
  futileProgress = 0;
  automateAgony = false;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  async attemptExistance() {
    this.futileProgress = 0;
    let delay = (100 / (1 + (this.record.multipliersOwned[0] / 10)));
    if (this.record.multipliersOwned[0] < 100) {
      for (this.futileProgress; this.futileProgress < 100; this.futileProgress++) {
        await this.delayTheInevitable(delay);
      }
    } else if (this.record.multipliersOwned[0] < 1000) {
      for (this.futileProgress; this.futileProgress < 101; this.futileProgress += 10) {
        await this.delayTheInevitable(delay * 10);
      }
    } else if (this.record.multipliersOwned[0] < 5000) {
      for (this.futileProgress; this.futileProgress < 101; this.futileProgress += 25) {
        await this.delayTheInevitable(delay * 25);
      }
    } else if (this.record.multipliersOwned[0] >= 20000) {
      this.futileProgress = 100;
      await this.delayTheInevitable(delay * 100);
    }
    this.futileProgress = 0;
    this.record.stress += this.existManually();
    if (this.automateAgony && this.record.triggerAutomation
      && !this.registrar.reinitializingDespair) {
      this.attemptExistance();
    } else {
      this.automateAgony = false;
    }
  }

  existManually(): number {
    return Math.floor(((this.record.multipliersOwned[1] + 1)
      + ((this.record.multipliersOwned[4]) * 10)
      + ((this.record.multipliersOwned[5]) * 100))
      * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10)));
  }

  private delayTheInevitable(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  automate() {
    this.record.triggerAutomation = true;
  }

}

