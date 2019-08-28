import { Injectable } from '@angular/core';
import { RecordOfExistance } from './record-of-existance';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  record: RecordOfExistance;
  theUnforgivingForwardMarchOfTimeAndDecay = interval(1000);
  existance;
  suffering: Subscription;
  reinitializingDespair = false;

  constructor() {
    this.continuePitifulExistance();
    this.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(data => {
      this.recordPitifulExistance();
      this.record.lifeExperience = Math.round(Math.log((this.record.stress - (1000 * (this.record.dejaVu + 1))) / 100));
      this.record.temporaryAnguish = Math.round(Math.log((this.record.dejaVu - (1000 * (this.record.eternalSuffering + 1))) / 100));
    });
    this.suffering = this.determineSuffering();
  }

  determineSuffering() {
    this.existance = interval(1000 / (1 + (this.record.multipliersOwned[2] / 10)));
    return this.existance.subscribe(i => {
      this.record.stress += this.influenceGains();
      if (!this.record.triggerStatus && this.record.stress > 0) {
        this.record.triggerStatus = true;
      }
      if (!this.record.triggerEfficiency && this.record.stress >= 10) {
        this.record.triggerEfficiency = true;
      }
      if (!this.record.triggerInfluence && this.record.multipliersOwned[1] >= 1) {
        this.record.triggerInfluence = true;
      }
      if (!this.record.triggerOutsourcing && this.record.influenced[0] >= 1) {
        this.record.triggerOutsourcing = true;
      }
      if (!this.record.triggerCloningMachine && this.record.stress >= 1000000000000000) {
        this.record.triggerInfluence = true;
      }
      if (!this.record.triggerTimeMachine && this.record.stress >= 1000000000000000000000) {
        this.record.triggerOutsourcing = true;
      }
      if (!this.record.triggerAscension && this.record.stress >= (1000 * (this.record.dejaVu + 1))) {
        this.record.triggerAscension = true;
      }
      if (!this.record.triggerTranscension && this.record.dejaVu >= (1000 * (this.record.eternalSuffering + 1))) {
        this.record.triggerTranscension = true;
      }
    });
  }

  accumulate(index: number, mult: number = 1) {
    for (let i = 0; i < mult; i++) {
      const price = Math.floor(this.record.multiplierBasePrices[index] * Math.pow(1.1, this.record.multipliersOwned[index]));
      if (this.record.stress >= price) {
        this.record.stress -= price;
        this.record.multipliersOwned[index]++;
      } else {
        break;
      }
    }
    if (index === 2) {
      this.suffering.unsubscribe();
      this.suffering = this.determineSuffering();
    }
  }

  influence(index: number, mult: number = 1) {
    for (let i = 0; i < mult; i++) {
      const price = Math.floor(this.record.influenceBasePrices[index] * Math.pow(1.1, this.record.influenced[index]));
      if (this.record.stress >= price) {
        this.record.stress -= price;
        this.record.influenced[index]++;
      } else {
        break;
      }
    }
  }

  influenceGains(): number {
    let stressPerTick = 0;
    // Get Student Debt to calculate increases
    const mult = (1 + (this.record.multipliersOwned[3] / 10))
      * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10));
    // Add each influencer's earnings to stressPerSecond
    for (let i = 0; i < this.record.influenced.length; i++) {
      stressPerTick += (this.record.influenced[i] * (Math.pow(5, i)) * mult);
    }
    // Plug earnings into Record
    this.record.stressPerTick = stressPerTick;
    this.record.stressPerSecond = (stressPerTick * (1 + (this.record.multipliersOwned[2] / 10)));
    // Return total earnings
    return stressPerTick;
  }

  recordPitifulExistance(): void {
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Pitiful Existance Recorded!');
  }

  ascend() {
    this.reinitializingDespair = true;
    this.record = {
      stress: 0,
      clones: 0,
      brokenPocketWatches: 0,
      lifeExperience: 0,
      dejaVu: this.record.dejaVu + Math.round(this.record.lifeExperience),
      temporaryAnguish: 0,
      eternalSuffering: this.record.eternalSuffering,
      multipliersOwned: [0, 0, 0, 0],
      multiplierPrices: [10, 20, 500, 1500],
      multiplierBasePrices: [10, 20, 500, 1500],
      influenced: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      influencePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      influenceBasePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      clonePrices: [1, 10, 50, 100, 250, 500],
      watchPrices: [1, 25, 50],
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false,
      triggerAutomation: false
     } as RecordOfExistance;
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Welcome to a New Pitiful Existance!');
    this.reinitializingDespair = false;
  }

  transcend() {
    this.reinitializingDespair = true;
    this.record = {
      stress: 0,
      clones: 0,
      brokenPocketWatches: 0,
      dejaVu: 0,
      eternalSuffering: this.record.eternalSuffering + Math.round((this.record.dejaVu - (1000 * (this.record.eternalSuffering + 1))) / 100),
      multipliersOwned: [0, 0, 0, 0],
      multiplierPrices: [10, 20, 500, 1500],
      multiplierBasePrices: [10, 20, 500, 1500],
      influenced: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      influencePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      influenceBasePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      clonePrices: [1, 10, 50, 100, 250, 500],
      watchPrices: [1, 25, 50],
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false,
      triggerAutomation: false
     } as RecordOfExistance;
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Welcome to a New Pitiful Existance!');
    this.reinitializingDespair = false;
  }

  continuePitifulExistance(): Subscription {
    if (localStorage.getItem('EIF-record')) {
      this.record = JSON.parse(localStorage.getItem('EIF-record')) as RecordOfExistance;
      console.log('Pitiful Existance Loaded!');
      return this.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(i => localStorage.setItem('EIF-record', JSON.stringify(this.record)));
    }
    this.record = {
      stress: 0,
      clones: 0,
      brokenPocketWatches: 0,
      dejaVu: 0,
      eternalSuffering: 0,
      multipliersOwned: [0, 0, 0, 0],
      multiplierPrices: [10, 20, 500, 1500],
      multiplierBasePrices: [10, 20, 500, 1500],
      influenced: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      influencePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      influenceBasePrices: [100, 750, 50000, 400000, 30000000, 2250000000, 168750000000, 1.265625e+13, 9.4921875e+14,
        7.1191406e+16, 5.3393555e+18, 4.0045166e+20, 3.0033875e+22, 2.2525406e+24, 1.6894054e+26],
      clonePrices: [1, 10, 50, 100, 250, 500],
      watchPrices: [1, 25, 50],
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false,
      triggerAutomation: false
     } as RecordOfExistance;
    return this.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(i => localStorage.setItem('EIF-record', JSON.stringify(this.record)));
    }

}
