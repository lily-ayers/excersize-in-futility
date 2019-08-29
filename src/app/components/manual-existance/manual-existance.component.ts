import { Component, OnInit, Inject, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';
import { RecordOfExistance } from 'src/app/record-of-existance';

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

  constructor(private registrar: RegistrarService) {
    registrar.continuePitifulExistance();
   }

  ngOnInit() {
  }

  async attemptExistance() {
    this.futileProgress = 1;
    if (this.record.multipliersOwned[0] < 25) {
      for (this.futileProgress; this.futileProgress < 101; this.futileProgress++) {
        await this.delayTheInevitable(this.record.multipliersOwned[0] + 1);
      }
    } else if (this.record.multipliersOwned[0] < 100) {
      for (this.futileProgress; this.futileProgress < 101; this.futileProgress += 20) {
        await this.delayTheInevitable((this.record.multipliersOwned[0] + 1) / 20);
      }
    } else if (this.record.multipliersOwned[0] >= 100) {
      this.futileProgress = 100;
      await this.delayTheInevitable((this.record.multipliersOwned[0] + 1) / 100);
    }
    this.futileProgress = 0;
    this.record.stress += this.existManually();
    if (this.automateAgony && !this.registrar.reinitializingDespair) {
      this.attemptExistance();
    } else {
      this.automateAgony = false;
    }
  }

  existManually(): number {
    return Math.floor(((this.record.multipliersOwned[1] + 1)
      + ((this.record.multipliersOwned[4]) * 10)
      /*+ ((this.record.multipliersOwned[5]) * 100)*/)
      * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10)));
  }

  private delayTheInevitable(accumulatedDespair: number) {
    return new Promise(resolve => setTimeout(resolve, (100 / (1 + (accumulatedDespair / 2)))));
  }

  automate() {
    this.record.triggerAutomation = true;
  }

}

