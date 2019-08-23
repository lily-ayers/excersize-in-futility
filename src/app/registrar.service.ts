import { Injectable } from '@angular/core';
import { RecordOfExistance } from './record-of-existance';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  record: RecordOfExistance;
  theUnforgivingForwardMarchOfTimeAndDecay = interval(1);
  existance;

  constructor() {
    this.continuePitifulExistance();
    this.existance = interval(1000 / (this.record.nihilisticMemes + 1));
    this.existance.subscribe(i => {
      this.record.stress += (this.record.chainsmokingTeenagers * 5 * (this.record.studentDebt + 1))
                          + (this.record.unenthusiasticNihilists * (this.record.studentDebt + 1));
      if (!this.record.triggerStatus && this.record.stress > 0) {
        this.record.triggerStatus = true;
      }
      if (!this.record.triggerEfficiency && this.record.stress >= 10) {
        this.record.triggerEfficiency = true;
      }
      if (!this.record.triggerInfluence && this.record.stress >= 100) {
        this.record.triggerInfluence = true;
      }
      if (!this.record.triggerOutsourcing && this.record.unenthusiasticNihilists >= 1) {
        this.record.triggerOutsourcing = true;
      }
    });
    this.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(i => localStorage.setItem('EIF-record', JSON.stringify(this.record)));
  }

  accumulateDespair() {
    const cost = this.record.currentDespairPrice;
    if (this.record.stress >= cost) {
      this.record.stress -= cost;
      this.record.accumulatedDespair++;
      this.record.currentDespairPrice = Math.round(this.record.currentDespairPrice * 1.1);
      this.recordPitifulExistance();
    } else {
      window.alert('You do not have enough stress to accumulate more despair!');
    }
  }

  wallowInDread() {
    const cost = this.record.currentDreadPrice;
    if (this.record.stress >= cost) {
      this.record.stress -= cost;
      this.record.wallowedDread++;
      this.record.currentDreadPrice = Math.round(this.record.currentDreadPrice * 1.1);
      this.recordPitifulExistance();
    } else {
      window.alert('You do not have enough stress to wallow in Dread!');
    }
  }

  contemplateNietchzhe() {
    if (this.record.stress >= this.record.currentNihilistPrice) {
      this.record.stress -= this.record.currentNihilistPrice;
      this.record.unenthusiasticNihilists++;
      this.record.currentNihilistPrice = Math.round(this.record.currentNihilistPrice * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  lendSomeoneACigarette() {
    if (this.record.stress >= this.record.currentChainsmokerPrice) {
      this.record.stress -= this.record.currentChainsmokerPrice;
      this.record.chainsmokingTeenagers++;
      this.record.currentChainsmokerPrice = Math.round(this.record.currentChainsmokerPrice * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  browseTheInternet() {
    if (this.record.stress >= this.record.currentMemePrice) {
      this.record.stress -= this.record.currentMemePrice;
      this.record.nihilisticMemes++;
      this.record.currentMemePrice = Math.round(this.record.currentMemePrice * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  takeOutStudentLoans() {
    if (this.record.stress >= this.record.currentDebtPrice) {
      this.record.stress -= this.record.currentDebtPrice;
      this.record.studentDebt++;
      this.record.currentDebtPrice = Math.round(this.record.currentDebtPrice * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  recordPitifulExistance(): void {
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    this.existance = interval(1000 / (this.record.nihilisticMemes + 1));
    console.log('Pitiful Existance Recorded!');
  }

  continuePitifulExistance(): boolean {
    if (localStorage.getItem('EIF-record')) {
      this.record = JSON.parse(localStorage.getItem('EIF-record')) as RecordOfExistance;
      console.log('Pitiful Existance Loaded!');
      return true;
    }
    this.record = {
      stress: 0,
      accumulatedDespair: 0,
      wallowedDread: 0,
      currentDreadPrice: 20,
      currentDespairPrice: 10,
      unenthusiasticNihilists: 0,
      currentNihilistPrice: 100,
      nihilisticMemes: 0,
      currentMemePrice: 500,
      studentDebt: 0,
      currentDebtPrice: 1500,
      chainsmokingTeenagers: 0,
      currentChainsmokerPrice: 750,
      dropoutPhilosophyMajors: 0,
      currentDropoutCost: 2000,
      methodActors: 0,
      currentActorCost: 7500,
      upAndComingDrummers: 0,
      currentDrummerCost: 20000,
      overlySelfAwarePsychologists: 0,
      currentPsychologistCost: 45000,
      philosophyMajors: 0,
      currentMajorCost: 75000,
      alcoholicWriters: 0,
      currentWriterCost: 120000,
      clonesThatKnowTheyAreAClone: 0,
      currentWokeCloneCost: 180000,
      clonesThatWishTheyWereAsGoodAsTheOriginals: 0,
      currentSadCloneCost: 250000,
      peopleWithClonesThatHaveSurpassedThem: 0,
      currentLoserCost: 500000,
      clonesOfNietzsche: 0,
      currentNietzscheCost: 1000000,
      clonesOfSamuelBeckett: 0,
      currentBeckettCost: 2000000,
      clonesOfJeanPaulSartre: 0,
      currentSartreCost: 5000000,
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false
     } as RecordOfExistance;
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Welcome to a New Pitiful Existance!');
    return false;
  }

}
