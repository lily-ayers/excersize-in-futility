import { Component, OnInit } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-manual-existance',
  templateUrl: './manual-existance.component.html',
  styleUrls: ['./manual-existance.component.scss']
})
export class ManualExistanceComponent implements OnInit {
  // Bool to control progress bar's hidden state
  attemptingExistance = false;
  // Percentage tracker for progress bar
  futileProgress = 0;
  ultimatelyPointlessProgress = 0;
  completeWasteOfEffort = 0;

  constructor(private registrar: RegistrarService) {
    registrar.continuePitifulExistance();
   }

  ngOnInit() {
  }

  async attemptExistance() {
    this.attemptingExistance = true;
    this.futileProgress = 1;
    for (this.futileProgress; this.futileProgress < 101; this.futileProgress++) {
      await this.delayTheInevitable(this.registrar.record.accumulatedDespair + 1);
    }
    this.attemptingExistance = false;
    console.log('Existed successfully!');
    this.registrar.record.stress += (this.registrar.record.wallowedDread + 1);
    this.registrar.recordPitifulExistance();
  }

  private delayTheInevitable(accumulatedDespair: number) {
    if (accumulatedDespair > 1) {
      return new Promise(resolve => setTimeout(resolve, (100 / accumulatedDespair)));
    }
    return new Promise(resolve => setTimeout(resolve, 100));
  }

}
