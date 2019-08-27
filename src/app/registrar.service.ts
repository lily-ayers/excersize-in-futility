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
  reinitializingDespair = false;

  constructor() {
    this.continuePitifulExistance();
    this.determineSuffering();
  }

  determineSuffering() {
    this.existance = interval(1000 / (this.record.nihilisticMemes + 1));
    this.existance.subscribe(i => {
      let mult = (this.record.studentDebt + 1) * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10));
      this.record.stress += (this.record.unenthusiasticNihilists * mult)
                          + (this.record.chainsmokingTeenagers * 5 * mult)
                          + (this.record.dropoutPhilosophyMajors * 25 * mult)
                          + (this.record.methodActors * 125 * mult)
                          + (this.record.upAndComingDrummers * 625 * mult)
                          + (this.record.overlySelfAwarePsychologists * 3125 * mult)
                          + (this.record.philosophyMajors * 15625 * mult)
                          + (this.record.alcoholicWriters * 78125 * mult)
                          + (this.record.recentlyDivorcedDivorceLawyer * 390625 * mult)
                          + (this.record.clonesThatKnowTheyAreAClone * 1953125 * mult)
                          + (this.record.clonesThatWishTheyWereAsGoodAsTheOriginals * 9765625 * mult)
                          + (this.record.peopleWithClonesThatHaveSurpassedThem * 48828125 * mult)
                          + (this.record.clonesOfNietzsche * 244140625 * mult)
                          + (this.record.clonesOfSamuelBeckett * 1220703125 * mult)
                          + (this.record.clonesOfJeanPaulSartre * 6103515625 * mult);
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
      if (!this.record.triggerAscension && this.record.stress >= (1000 * (this.record.dejaVu + 1))) {
        this.record.triggerAscension = true;
      }
      if (!this.record.triggerTranscension && this.record.dejaVu >= (1000 * (this.record.eternalSuffering + 1))) {
        this.record.triggerTranscension = true;
      }
    });
    this.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(i => localStorage.setItem('EIF-record', JSON.stringify(this.record)));
  }


  accumulateDespair() {
    const cost = this.record.currentDespairPrice;
    if (this.record.stress >= cost) {
      this.record.stress -= cost;
      this.record.accumulatedDespair++;
      this.record.currentDespairPrice = Math.round(10 * Math.pow(1.1, this.record.accumulatedDespair));
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
      this.record.currentDreadPrice = Math.round(20 * Math.pow(1.1, this.record.wallowedDread));
      this.recordPitifulExistance();
    } else {
      window.alert('You do not have enough stress to wallow in Dread!');
    }
  }

  contemplateNietchzhe() {
    if (this.record.stress >= this.record.currentNihilistPrice) {
      this.record.stress -= this.record.currentNihilistPrice;
      this.record.unenthusiasticNihilists++;
      this.record.currentNihilistPrice = Math.round(100 * Math.pow(1.1, this.record.unenthusiasticNihilists));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  lendSomeoneACigarette() {
    if (this.record.stress >= this.record.currentChainsmokerPrice) {
      this.record.stress -= this.record.currentChainsmokerPrice;
      this.record.chainsmokingTeenagers++;
      this.record.currentChainsmokerPrice = Math.round(750 * Math.pow(1.1, this.record.chainsmokingTeenagers));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  quoteSartreInACoffeeShop() {
    if (this.record.stress >= this.record.currentDropoutCost) {
      this.record.stress -= this.record.currentDropoutCost;
      this.record.dropoutPhilosophyMajors++;
      this.record.currentDropoutCost = Math.round(50000 * Math.pow(1.1, this.record.dropoutPhilosophyMajors));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  misquoteShakespeare() {
    if (this.record.stress >= this.record.currentActorCost) {
      this.record.stress -= this.record.currentActorCost;
      this.record.methodActors++;
      this.record.currentActorCost = Math.round(400000 * Math.pow(1.1, this.record.methodActors));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  attendLocalConcert() {
    if (this.record.stress >= this.record.currentDrummerCost) {
      this.record.stress -= this.record.currentDrummerCost;
      this.record.upAndComingDrummers++;
      this.record.currentDrummerCost = Math.round(30000000 * Math.pow(1.1, this.record.upAndComingDrummers));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  getTherapy() {
    if (this.record.stress >= this.record.currentPsychologistCost) {
      this.record.stress -= this.record.currentPsychologistCost;
      this.record.overlySelfAwarePsychologists++;
      this.record.currentPsychologistCost = Math.round(2250000000 * Math.pow(1.1, this.record.overlySelfAwarePsychologists));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  replyToEverythingWithWhy() {
    if (this.record.stress >= this.record.currentMajorCost) {
      this.record.stress -= this.record.currentMajorCost;
      this.record.philosophyMajors++;
      this.record.currentMajorCost = Math.round(168750000000 * Math.pow(1.1, this.record.philosophyMajors));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  bringWhiskeyToABookSigning() {
    if (this.record.stress >= this.record.currentWriterCost) {
      this.record.stress -= this.record.currentWriterCost;
      this.record.alcoholicWriters++;
      this.record.currentWriterCost = Math.round(1.265625e+13 * Math.pow(1.1, this.record.alcoholicWriters));
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
      this.record.currentLawyerCost = Math.round(9.4921875e+14 * Math.pow(1.1, this.record.recentlyDivorcedDivorceLawyer));
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
      this.record.currentWokeCloneCost = Math.round(7.1191406e+16 * Math.pow(1.1, this.record.clonesThatKnowTheyAreAClone));
      this.record.currentWokeCloneCloneCost = Math.round(1 * Math.pow(1.1, this.record.clonesThatKnowTheyAreAClone));
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
      this.record.currentSadCloneCost = Math.round(5.3393555e+18 * Math.pow(1.1, this.record.clonesThatWishTheyWereAsGoodAsTheOriginals));
      this.record.currentSadCloneCloneCost = Math.round(10 * Math.pow(1.1, this.record.clonesThatWishTheyWereAsGoodAsTheOriginals));
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
      this.record.currentLoserCost = Math.round(4.0045166e+20 * Math.pow(1.1, this.record.peopleWithClonesThatHaveSurpassedThem));
      this.record.currentLoserCloneCost = Math.round(50 * Math.pow(1.1, this.record.peopleWithClonesThatHaveSurpassedThem));
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
      this.record.currentNietzscheCost = Math.round(3.0033875e+22 * Math.pow(1.1, this.record.clonesOfNietzsche));
      this.record.currentNietzscheCloneCost = Math.round(100 * Math.pow(1.1, this.record.clonesOfNietzsche));
      this.record.currentNietzscheWatchCost = Math.round(1 * Math.pow(1.1, this.record.clonesOfNietzsche));
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
      this.record.brokenPocketWatches -= this.record.currentBeckettWatchCost;
      this.record.clonesOfSamuelBeckett++;
      this.record.currentBeckettCost = Math.round(2.2525406e+24 * Math.pow(1.1, this.record.clonesOfSamuelBeckett));
      this.record.currentBeckettCloneCost = Math.round(250 * Math.pow(1.1, this.record.clonesOfSamuelBeckett));
      this.record.currentBeckettWatchCost = Math.round(25 * Math.pow(1.1, this.record.clonesOfSamuelBeckett));
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
      this.record.currentSartreCost = Math.round(1.6894054e+26 * Math.pow(1.1, this.record.clonesOfJeanPaulSartre));
      this.record.currentSartreCloneCost = Math.round(500 * Math.pow(1.1, this.record.clonesOfJeanPaulSartre));
      this.record.currentSartreWatchCost = Math.round(50 * Math.pow(1.1, this.record.clonesOfJeanPaulSartre));
      this.recordPitifulExistance();
    } else {

      window.alert('Not enough Stress!');
    }
  }

  browseTheInternet() {
    if (this.record.stress >= this.record.currentMemePrice) {
      this.record.stress -= this.record.currentMemePrice;
      this.record.nihilisticMemes++;
      this.record.currentMemePrice = Math.round(500 * Math.pow(1.1, this.record.nihilisticMemes));
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
      this.record.currentDebtPrice = Math.round(1500 * Math.pow(1.1, this.record.studentDebt));
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

  ascend() {
    this.reinitializingDespair = true;
    this.record = {
      stress: 0,
      clones: 0,
      brokenPocketWatches: 0,
      dejaVu: this.record.dejaVu + ((this.record.stress - (1000 * (this.record.dejaVu + 1))) / 100),
      eternalSuffering: this.record.eternalSuffering,
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
      currentDropoutCost: 50000,
      methodActors: 0,
      currentActorCost: 400000,
      upAndComingDrummers: 0,
      currentDrummerCost: 30000000,
      overlySelfAwarePsychologists: 0,
      currentPsychologistCost: 2250000000,
      philosophyMajors: 0,
      currentMajorCost: 168750000000,
      alcoholicWriters: 0,
      currentWriterCost: 1.265625e+13,
      recentlyDivorcedDivorceLawyer: 0,
      currentLawyerCost: 9.4921875e+14,
      clonesThatKnowTheyAreAClone: 0,
      currentWokeCloneCost: 7.1191406e+16,
      currentWokeCloneCloneCost: 1,
      clonesThatWishTheyWereAsGoodAsTheOriginals: 0,
      currentSadCloneCost: 5.3393555e+18,
      currentSadCloneCloneCost: 10,
      peopleWithClonesThatHaveSurpassedThem: 0,
      currentLoserCost: 4.0045166e+20,
      currentLoserCloneCost: 50,
      clonesOfNietzsche: 0,
      currentNietzscheCost: 3.0033875e+22,
      currentNietzscheCloneCost: 100,
      currentNietzscheWatchCost: 1,
      clonesOfSamuelBeckett: 0,
      currentBeckettCost: 2.2525406e+24,
      currentBeckettCloneCost: 250,
      currentBeckettWatchCost: 25,
      clonesOfJeanPaulSartre: 0,
      currentSartreCost: 1.6894054e+26,
      currentSartreCloneCost: 500,
      currentSartreWatchCost: 50,
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false
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
      eternalSuffering: this.record.eternalSuffering + ((this.record.dejaVu - (1000 * (this.record.eternalSuffering + 1))) / 100),
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
      currentDropoutCost: 50000,
      methodActors: 0,
      currentActorCost: 400000,
      upAndComingDrummers: 0,
      currentDrummerCost: 30000000,
      overlySelfAwarePsychologists: 0,
      currentPsychologistCost: 2250000000,
      philosophyMajors: 0,
      currentMajorCost: 168750000000,
      alcoholicWriters: 0,
      currentWriterCost: 1.265625e+13,
      recentlyDivorcedDivorceLawyer: 0,
      currentLawyerCost: 9.4921875e+14,
      clonesThatKnowTheyAreAClone: 0,
      currentWokeCloneCost: 7.1191406e+16,
      currentWokeCloneCloneCost: 1,
      clonesThatWishTheyWereAsGoodAsTheOriginals: 0,
      currentSadCloneCost: 5.3393555e+18,
      currentSadCloneCloneCost: 10,
      peopleWithClonesThatHaveSurpassedThem: 0,
      currentLoserCost: 4.0045166e+20,
      currentLoserCloneCost: 50,
      clonesOfNietzsche: 0,
      currentNietzscheCost: 3.0033875e+22,
      currentNietzscheCloneCost: 100,
      currentNietzscheWatchCost: 1,
      clonesOfSamuelBeckett: 0,
      currentBeckettCost: 2.2525406e+24,
      currentBeckettCloneCost: 250,
      currentBeckettWatchCost: 25,
      clonesOfJeanPaulSartre: 0,
      currentSartreCost: 1.6894054e+26,
      currentSartreCloneCost: 500,
      currentSartreWatchCost: 50,
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false
     } as RecordOfExistance;
    localStorage.setItem('EIF-record', JSON.stringify(this.record));
    console.log('Welcome to a New Pitiful Existance!');
    this.reinitializingDespair = false;
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
      eternalSuffering: 0,
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
      currentDropoutCost: 50000,
      methodActors: 0,
      currentActorCost: 400000,
      upAndComingDrummers: 0,
      currentDrummerCost: 30000000,
      overlySelfAwarePsychologists: 0,
      currentPsychologistCost: 2250000000,
      philosophyMajors: 0,
      currentMajorCost: 168750000000,
      alcoholicWriters: 0,
      currentWriterCost: 1.265625e+13,
      recentlyDivorcedDivorceLawyer: 0,
      currentLawyerCost: 9.4921875e+14,
      clonesThatKnowTheyAreAClone: 0,
      currentWokeCloneCost: 7.1191406e+16,
      currentWokeCloneCloneCost: 1,
      clonesThatWishTheyWereAsGoodAsTheOriginals: 0,
      currentSadCloneCost: 5.3393555e+18,
      currentSadCloneCloneCost: 10,
      peopleWithClonesThatHaveSurpassedThem: 0,
      currentLoserCost: 4.0045166e+20,
      currentLoserCloneCost: 50,
      clonesOfNietzsche: 0,
      currentNietzscheCost: 3.0033875e+22,
      currentNietzscheCloneCost: 100,
      currentNietzscheWatchCost: 1,
      clonesOfSamuelBeckett: 0,
      currentBeckettCost: 2.2525406e+24,
      currentBeckettCloneCost: 250,
      currentBeckettWatchCost: 25,
      clonesOfJeanPaulSartre: 0,
      currentSartreCost: 1.6894054e+26,
      currentSartreCloneCost: 500,
      currentSartreWatchCost: 50,
      triggerEfficiency: false,
      triggerInfluence: false,
      triggerOutsourcing: false,
      triggerStatus: false,
      triggerMarriage: false,
      triggerCloningMachine: false,
      triggerTimeMachine: false,
      triggerAscension: false,
      triggerTranscension: false
     } as RecordOfExistance;
    return false;
  }

}
