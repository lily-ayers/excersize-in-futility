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
  automateAgony = false;

  constructor() { }

  initializeMisery() {
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
      if (!this.record.triggerStatus && (this.record.stress > 0 || this.record.dejaVu > 0 || this.record.eternalSuffering > 0)) {
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
      if (!this.record.triggerAscension && this.record.lifeExperience > 0) {
        this.record.triggerAscension = true;
      }
      if(!this.record.triggerTranscension && this.record.temporaryAnguish > 0) {
        this.record.triggerTranscension = true;
      }
      if (!this.record.triggerCloningMachine && this.record.stress >= 1000000000000000) {
        this.record.triggerCloningMachine = true;
      }
      if (!this.record.triggerTimeMachine && this.record.stress >= 1000000000000000000000) {
        this.record.triggerTimeMachine = true;
      }
    });
  }

  accumulate(index: number, mult: number = 1) {
    let transaction = false;
    for (let i = 0; i < mult; i++) {
      const price = Math.floor(this.record.multiplierBasePrices[index] * Math.pow(1.1, this.record.multipliersOwned[index]));
      if (this.record.stress >= price) {
        this.record.stress -= price;
        this.record.multipliersOwned[index]++;
        transaction = true;
      } else {
        break;
      }
    }
    if (index === 2) {
      this.suffering.unsubscribe();
      this.suffering = this.determineSuffering();
    }
    if (transaction) {
      return true;
    }
    return false;
  }

  influence(index: number, mult: number = 1) {
    let transaction = false;
    for (let i = 0; i < mult; i++) {
      const price = Math.floor(this.record.influenceBasePrices[index] * Math.pow(1.1, this.record.influenced[index]));
      if (this.record.stress >= price) {
        this.record.stress -= price;
        this.record.influenced[index]++;
        transaction = true;
      } else {
        break;
      }
    }
    if (transaction) {
      return true;
    }
    return false;
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
    localStorage.setItem('EIF-timestamp', JSON.stringify(Date.now()));
    console.log('Pitiful Existance Recorded!');
  }

  reimburse() {
    const previousToilEndingTime = JSON.parse(localStorage.getItem('EIF-timestamp')) as Date;
    const currentToilStartingTime = Date.now();
    const difference = Math.abs(currentToilStartingTime.valueOf() - previousToilEndingTime.valueOf());
    let offlineToil = Math.ceil(difference / 1000);
    offlineToil *= this.influenceGains();
    console.log('Offline Earnings: ' + offlineToil);
    this.record.stress += offlineToil;
  }

  initializeBasicRecord(newDejaVu: number = 0, newEternalSuffering: number = 0) {
    this.reinitializingDespair = true;
    this.record = {
      stress: 0,
      clones: 0,
      brokenPocketWatches: 0,
      dejaVu: newDejaVu,
      eternalSuffering: newEternalSuffering,
      multipliersOwned: [0, 0, 0, 0, 0, 0],
      multiplierPrices: [20, 10, 500, 1500, 3000, 45000],
      multiplierBasePrices: [20, 10, 500, 1500, 3000, 45000],
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

  ascend() {
    const dejaVu = this.record.dejaVu + Math.round(this.record.lifeExperience);
    this.initializeBasicRecord(dejaVu);
    this.determineSuffering();
    localStorage.removeItem('EIF-sufferer');
    localStorage.removeItem('EIF-sadboiTrigger');
  }

  transcend() {
    const eternalSuffering = this.record.eternalSuffering
      + Math.round((this.record.dejaVu - (1000 * (this.record.eternalSuffering + 1))) / 100);
    this.initializeBasicRecord(eternalSuffering);
    this.determineSuffering();
    localStorage.removeItem('EIF-sufferer');
    localStorage.removeItem('EIF-sadboiTrigger');
  }

  continuePitifulExistance() {
    if (localStorage.getItem('EIF-record')) {
      this.record = JSON.parse(localStorage.getItem('EIF-record')) as RecordOfExistance;
      console.log('Pitiful Existance Loaded!');
    } else {
      this.initializeBasicRecord();
      console.log('Welcome to a New Pitiful Existance!');
    }
  }
}
