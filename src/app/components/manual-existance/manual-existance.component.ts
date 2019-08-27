import { Component, OnInit, Inject } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-manual-existance',
  templateUrl: './manual-existance.component.html',
  styleUrls: ['./manual-existance.component.scss']
})
export class ManualExistanceComponent implements OnInit {
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
    for (this.futileProgress; this.futileProgress < 101; this.futileProgress++) {
      await this.delayTheInevitable(this.registrar.record.accumulatedDespair + 1);
    }
    this.futileProgress = 0;
    this.registrar.record.stress += (this.registrar.record.wallowedDread + 100)
      * (1 + (Math.pow(this.registrar.record.dejaVu, this.registrar.record.eternalSuffering + 1) / 10));
    if (this.automateAgony && !this.registrar.reinitializingDespair) {
      this.attemptExistance();
    } else {
      this.automateAgony = false;
    }
  }

  private delayTheInevitable(accumulatedDespair: number) {
    if (accumulatedDespair > 1) {
      return new Promise(resolve => setTimeout(resolve, (1 / accumulatedDespair)));
    }
    return new Promise(resolve => setTimeout(resolve, 1));
  }

}

