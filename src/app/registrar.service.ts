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
    this.determineSuffering();
  }

  determineSuffering() {
    this.existance = interval(1000 / (this.record.nihilisticMemes + 1));
    this.existance.subscribe(i => {
      this.record.stress += (this.record.unenthusiasticNihilists * (this.record.studentDebt + 1))
                          + (this.record.chainsmokingTeenagers * 5 * (this.record.studentDebt + 1))
                          + (this.record.dropoutPhilosophyMajors * 10 * (this.record.studentDebt + 1))
                          + (this.record.methodActors * 25 * (this.record.studentDebt + 1))
                          + (this.record.upAndComingDrummers * 50 * (this.record.studentDebt + 1))
                          + (this.record.overlySelfAwarePsychologists * 100 * (this.record.studentDebt))
                          + (this.record.philosophyMajors * 250 * (this.record.studentDebt + 1))
                          + (this.record.alcoholicWriters * 500 * (this.record.studentDebt + 1))
                          + (this.record.recentlyDivorcedDivorceLawyer * 1000 * (this.record.studentDebt + 1))
                          + (this.record.clonesThatKnowTheyAreAClone * 2500 * (this.record.studentDebt + 1))
                          + (this.record.clonesThatWishTheyWereAsGoodAsTheOriginals * 5000 * (this.record.studentDebt + 1))
                          + (this.record.peopleWithClonesThatHaveSurpassedThem * 10000 * (this.record.studentDebt + 1))
                          + (this.record.clonesOfNietzsche * 25000 * (this.record.studentDebt + 1))
                          + (this.record.clonesOfSamuelBeckett * 50000 * (this.record.studentDebt + 1))
                          + (this.record.clonesOfJeanPaulSartre * 100000 * (this.record.studentDebt + 1));
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

  quoteSartreInACoffeeShop() {
    if (this.record.stress >= this.record.currentDropoutCost) {
      this.record.stress -= this.record.currentDropoutCost;
      this.record.dropoutPhilosophyMajors++;
      this.record.currentDropoutCost = Math.round(this.record.currentDropoutCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  misquoteShakespeare() {
    if (this.record.stress >= this.record.currentActorCost) {
      this.record.stress -= this.record.currentActorCost;
      this.record.methodActors++;
      this.record.currentActorCost = Math.round(this.record.currentActorCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  attendLocalConcert() {
    if (this.record.stress >= this.record.currentDrummerCost) {
      this.record.stress -= this.record.currentDrummerCost;
      this.record.upAndComingDrummers++;
      this.record.currentDrummerCost = Math.round(this.record.currentDrummerCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  getTherapy() {
    if (this.record.stress >= this.record.currentPsychologistCost) {
      this.record.stress -= this.record.currentPsychologistCost;
      this.record.overlySelfAwarePsychologists++;
      this.record.currentPsychologistCost = Math.round(this.record.currentPsychologistCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  replyToEverythingWithWhy() {
    if (this.record.stress >= this.record.currentMajorCost) {
      this.record.stress -= this.record.currentMajorCost;
      this.record.philosophyMajors++;
      this.record.currentMajorCost = Math.round(this.record.currentMajorCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  bringWhiskeyToABookSigning() {
    if (this.record.stress >= this.record.currentWriterCost) {
      this.record.stress -= this.record.currentWriterCost;
      this.record.alcoholicWriters++;
      this.record.currentWriterCost = Math.round(this.record.currentWriterCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  speedDateAtALocalBar() {
    if (this.record.stress >= this.record.currentLawyerCost) {
      if (!this.record.triggerCloningMachine){
        this.record.triggerCloningMachine = true;
      }
      this.record.stress -= this.record.currentLawyerCost;
      this.record.recentlyDivorcedDivorceLawyer++;
      this.record.currentLawyerCost = Math.round(this.record.currentLawyerCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  tellACloneThatTheyreAClone() {
    if (this.record.stress >= this.record.currentWokeCloneCost
            && this.record.clones >= this.record.currentWokeCloneCloneCost) {
      this.record.stress -= this.record.currentWokeCloneCost;
      this.record.clones -= this.record.currentWokeCloneCloneCost;
      this.record.clonesThatKnowTheyAreAClone++;
      this.record.currentWokeCloneCost = Math.round(this.record.currentWokeCloneCost * 1.1);
      this.record.currentWokeCloneCloneCost = Math.round(this.record.currentWokeCloneCloneCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  talkToACloneAboutHowGreatTheirOriginalIs() {
    if (this.record.stress >= this.record.currentSadCloneCost
            && this.record.clones >= this.record.currentSadCloneCloneCost) {
      this.record.stress -= this.record.currentSadCloneCost;
      this.record.clones -= this.record.currentSadCloneCloneCost;
      this.record.clonesThatWishTheyWereAsGoodAsTheOriginals++;
      this.record.currentSadCloneCost = Math.round(this.record.currentSadCloneCost * 1.1);
      this.record.currentSadCloneCloneCost = Math.round(this.record.currentSadCloneCloneCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  getACloneTherapyAndShowTheOriginalTheResult() {
    if (this.record.stress >= this.record.currentLoserCost
            && this.record.clones >= this.record.currentLoserCloneCost) {
      if (!this.record.triggerTimeMachine){
        this.record.triggerTimeMachine = true;
      }
      this.record.stress -= this.record.currentLoserCost;
      this.record.clones -= this.record.currentLoserCloneCost;
      this.record.clonesThatWishTheyWereAsGoodAsTheOriginals++;
      this.record.currentLoserCost = Math.round(this.record.currentLoserCost * 1.1);
      this.record.currentLoserCloneCost = Math.round(this.record.currentLoserCloneCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  cloneTheFirstLoserYouThinkOf() {
    if (this.record.stress >= this.record.currentNietzscheCost
            && this.record.clones >= this.record.currentNietzscheCloneCost
            && this.record.brokenPocketWatches >= this.record.currentNietzscheWatchCost) {
      this.record.stress -= this.record.currentNietzscheCost;
      this.record.clones -= this.record.currentNietzscheCloneCost;
      this.record.brokenPocketWatches -= this.record.currentNietzscheWatchCost;
      this.record.clonesOfNietzsche++;
      this.record.currentNietzscheCost = Math.round(this.record.currentNietzscheCost * 1.1);
      this.record.currentNietzscheCloneCost = Math.round(this.record.currentNietzscheCloneCost * 1.1);
      this.record.currentNietzscheWatchCost = Math.round(this.record.currentNietzscheWatchCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  cloneSomeoneLessLame() {
    if (this.record.stress >= this.record.currentBeckettCost
            && this.record.clones >= this.record.currentBeckettCloneCost
            && this.record.brokenPocketWatches >= this.record.currentBeckettWatchCost) {
      this.record.stress -= this.record.currentBeckettCost;
      this.record.clones -= this.record.currentBeckettCloneCost;
      this.record.brokenPocketWatches -= this.record.currentNietzscheWatchCost;
      this.record.clonesOfSamuelBeckett++;
      this.record.currentBeckettCost = Math.round(this.record.currentBeckettCost * 1.1);
      this.record.currentBeckettCloneCost = Math.round(this.record.currentBeckettCloneCost * 1.1);
      this.record.currentBeckettWatchCost = Math.round(this.record.currentBeckettWatchCost * 1.1);
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  cloneSomeoneLessSexist() {
    if (this.record.stress >= this.record.currentSartreCost
            && this.record.clones >= this.record.currentSartreCloneCost
            && this.record.brokenPocketWatches >= this.record.currentSartreWatchCost) {
      this.record.stress -= this.record.currentSartreCost;
      this.record.clones -= this.record.currentSartreCloneCost;
      this.record.brokenPocketWatches -= this.record.currentSartreWatchCost;
      this.record.clonesOfJeanPaulSartre++;
      this.record.currentSartreCost = Math.round(this.record.currentSartreCost * 1.1);
      this.record.currentSartreCloneCost = Math.round(this.record.currentSartreCloneCost * 1.1);
      this.record.currentSartreWatchCost = Math.round(this.record.currentSartreWatchCost * 1.1);
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
      this.determineSuffering();
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
      clones: 0,
      brokenPocketWatches: 0,
      dejaVu: 0,
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
      recentlyDivorcedDivorceLawyer: 0,
      currentLawyerCost: 160000,
      clonesThatKnowTheyAreAClone: 0,
      currentWokeCloneCost: 180000,
      currentWokeCloneCloneCost: 1,
      clonesThatWishTheyWereAsGoodAsTheOriginals: 0,
      currentSadCloneCost: 250000,
      currentSadCloneCloneCost: 10,
      peopleWithClonesThatHaveSurpassedThem: 0,
      currentLoserCost: 500000,
      currentLoserCloneCost: 50,
      clonesOfNietzsche: 0,
      currentNietzscheCost: 1000000,
      currentNietzscheCloneCost: 100,
      currentNietzscheWatchCost: 1,
      clonesOfSamuelBeckett: 0,
      currentBeckettCost: 2000000,
      currentBeckettCloneCost: 250,
      currentBeckettWatchCost: 25,
      clonesOfJeanPaulSartre: 0,
      currentSartreCost: 5000000,
      currentSartreCloneCost: 500,
      currentSartreWatchCost: 50,
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false
     } as RecordOfExistance;
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Welcome to a New Pitiful Existance!');
    return false;
  }

}
