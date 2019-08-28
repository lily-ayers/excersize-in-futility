import { Component, OnInit, Inject, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-manual-existance',
  templateUrl: './manual-existance.component.html',
  styleUrls: ['./manual-existance.component.scss']
})
export class ManualExistanceComponent implements OnInit {
  @Input() record;
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
    this.record.stress += Math.floor((this.record.multipliersOwned[1] + 1)
      * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10)));
    if (this.automateAgony && !this.registrar.reinitializingDespair) {
      this.attemptExistance();
    } else {
      this.automateAgony = false;
    }
  }

  private delayTheInevitable(accumulatedDespair: number) {
    return new Promise(resolve => setTimeout(resolve, (100 / accumulatedDespair)));
  }

  automate() {
    this.record.triggerAutomation = true;
  }

}

