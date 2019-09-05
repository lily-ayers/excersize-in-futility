import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SadboiMessage } from './sadboi-message';
import { Observable, interval, Subscription } from 'rxjs';
import { encounters } from '../../assets/random-encounters.json';
import { Sufferer } from './sufferer';
import { Encounter } from './encounter';
import { RegistrarService } from '../existance/registrar.service';

@Injectable({
  providedIn: 'root'
})
export class SadboiAdvanceService {
  consoleHistory: SadboiMessage[] = [
    { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
  ];
  sufferer: Sufferer;
  encounters = encounters;
  // Track which area the sufferer is in
  worldProgress = 1;
  restSubscription: Subscription;
  restTime = 0;
  restGains = 0;
  resting = false;
  instance = false;
  basicActions = ['help', 'wander', 'rest', 'retire', 'purpose', 'sufferer'];
  instanceActions: string[];
  instanceFollowUps: number[];
  // Special instances include retiring, and eventually more.
  // 666555 means retirement, as in US, UK, and AUS retirement ages
  // 909090 means wake, as in "ZZZ"
  // 404404 means End instance, as in Not Found
  specialInstances = [666555, 909090, 404404, 200200, 999999];

  constructor(private registrar: RegistrarService) {
    if (localStorage.getItem('EIF-sufferer')) {
      this.sufferer = JSON.parse(localStorage.getItem('EIF-sufferer')) as Sufferer;
    } else {
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        damage: 2,
        accuracy: 75,
        defense: 2,
        sensibility: 2,
        stoicism: 2,
        deaths: 0
      };
      localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer));
    }
    this.registrar.theUnforgivingForwardMarchOfTimeAndDecay
      .subscribe(data => localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer)));
    this.consoleHistory.push({ message: 'Available Actions: ' });
    for (const action of this.basicActions) {
      this.consoleHistory.push({ message: action, link: true});
    }
  }

  submit(input: string) {
    if (input.toLowerCase().includes('help')) {
      this.help();
    } else if (input.toLowerCase().includes('wander')) {
      this.wander();
    } else if (input.toLowerCase().includes('rest')) {
      this.rest();
    } else if (input.toLowerCase().includes('retire')) {
      this.retire();
    } else if (input.toLowerCase().includes('purpose')) {
      this.retireInfo();
    } else if (input.toLowerCase().includes('sufferer')) {
      this.suffererStats();
    } else {
      this.consoleHistory.push({ message: 'You either cant or wont do that, whatever it is. Try the "help" command.' });
    }
  }

  submitInstance(input: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.instanceActions.length; i++) {
      if (input.toLowerCase().includes(this.instanceActions[i])) {
        this.encounter(this.instanceFollowUps[i]);
        return;
      }
    }
  }

  help() {
    this.consoleHistory.push({ message: 'Commands  |   Actions' });
    this.consoleHistory.push({ message: 'wander    |   Waste time wandering the wastelands' });
    this.consoleHistory.push({ message: 'rest      |   Rest for a while and regain some health' });
    this.consoleHistory.push({ message: 'retire    |   Retire your current sufferer' });
    this.consoleHistory.push({ message: 'purpose   |   Display info about retiring' });
    this.consoleHistory.push({ message: 'sufferer  |   Displays your Sufferers current stats' });
  }

  wander() {
    this.consoleHistory.push({ message: 'Wandering the wastes...' });
    this.encounter((Math.floor(Math.random() * 9) * 10) + (90 * (this.worldProgress - 1)));
  }

  rest() {
    this.resting = true;
    this.consoleHistory.push({ message: 'Resting...' });
    this.consoleHistory.push({ message: 'Enter "wake" to stop resting.' });
    const restTime = interval(1000);
    this.restSubscription = restTime.subscribe(seconds => {
      this.restTime = seconds;
      if ((this.sufferer.health < this.sufferer.maxHealth) && seconds % 5 === 0) {
        this.sufferer.health++;
        this.restGains++;
      }
    });
    this.instance = true;
    this.instanceActions = ['wake'];
    this.consoleHistory.push({ message: 'Available Actions: ' });
    this.consoleHistory.push({ message: 'wake', link: true});
    this.instanceFollowUps = [909090];
  }

  wake() {
    this.resting = false;
    this.restSubscription.unsubscribe();
    let plural;
    if (this.restTime > 1) {
      plural = 's';
    } else {
       plural = '';
    }
    this.consoleHistory.push({ message: `You rested for ${this.restTime} second${plural} and gained ${this.restGains} health` });
    this.restTime = 0;
    this.restGains = 0;
    this.instance = false;
    for (const action of this.basicActions) {
      this.consoleHistory.push({ message: action, link: true});
    }
  }

  retire() {
    this.instance = true;
    this.consoleHistory.push({ message: 'Retire for ' + this.calculateSuffering() + ' Deja Vu?' });
    this.instanceActions = ['y', 'n'];
    this.instanceFollowUps = [666555, 404404];
    for (const action of this.instanceActions) {
      this.consoleHistory.push({ message: action, link: true});
    }
  }

  retireInfo() {
    // tslint:disable-next-line: max-line-length
    this.consoleHistory.push({ message: 'Retiring your sufferer earns you Deja Vu. You will earn Deja Vu equivalent to the sum of your Sufferers stats minus base values, divided by 200.' });
  }

  async encounter(encounterID: number) {
    this.instance = false;
    if (!this.specialInstances.includes(encounterID)) {
      let encounter: Encounter = JSON.parse(JSON.stringify(this.encounters[encounterID]));
      this.consoleHistory.push({ message: encounter.message });
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (encounter.affectedStats && encounter.statChange) {
        this.statChanges(encounter);
      }
      if (this.sufferer.health <= 0) {
        this.encounter(7);
      } else if (encounter.actions) {
        this.instance = true;
        this.instanceFollowUps = encounter.followUps;
        this.instanceActions = encounter.actions;
        encounter = this.getAdditionalActions(encounter);
        this.consoleHistory.push({ message: 'Available Actions: ' });
        for (const action of this.instanceActions) {
          this.consoleHistory.push({ message: action, link: true});
        }
      } else if (encounter.followUps) {
      this.encounter(encounter.followUps[0]);
      }
    } else if (encounterID === 909090) {
      this.wake();
    } else if (encounterID === 404404) {
      this.consoleHistory.push({ message: 'What now, hotshot?' });
      this.consoleHistory.push({ message: 'Available Actions: ' });
      for (const action of this.basicActions) {
        this.consoleHistory.push({ message: action, link: true});
      }
    } else if (encounterID === 777777) {
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.consoleHistory.push({ message: 'Available Actions: ' });
      for (const action of this.basicActions) {
        this.consoleHistory.push({ message: action, link: true});
      }
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        damage: 2,
        accuracy: 75,
        defense: 2,
        sensibility: 2,
        stoicism: 2,
        deaths: this.sufferer.deaths + 1
      };
    } else if (encounterID === 666555) {
      this.registrar.record.dejaVu += this.calculateSuffering();
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.consoleHistory.push({ message: 'Available Actions: ' });
      for (const action of this.basicActions) {
        this.consoleHistory.push({ message: action, link: true});
      }
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        damage: 2,
        accuracy: 75,
        defense: 2,
        sensibility: 2,
        stoicism: 2,
        deaths: 0
      };
    } else if (encounterID === 200200) {
      this.worldProgress++;
    } else if (encounterID === 999999) {
      this.combat(JSON.parse(JSON.stringify(this.encounters[encounterID].enemies)));
    }
    this.encounters = encounters;
  }

  getAdditionalActions(encounter: Encounter): Encounter {
    if (encounter.actionSkillCheck) {
      let i = 0;
      for (const check of encounter.actionSkillCheck) {
        if (!this.statChecker(check[0], +check[1])) {
          this.instanceFollowUps[i] = +check[2];
        }
        i++;
      }
    }
    if (encounter.actionRequirements) {
      for (const req of encounter.actionRequirements) {
        if (!this.instanceActions.includes(req[2]) && this.statChecker(req[0], +req[1])) {
          this.instanceActions.push(req[2]);
          this.instanceFollowUps.push(+req[3]);
        }
      }
    }
    return encounter;
  }

  combat(enemy: string) {

  }

  suffererStats() {
    this.consoleHistory.push({ message: 'Health: ' + this.sufferer.health + '/' + this.sufferer.maxHealth });
    this.consoleHistory.push({ message: 'Damage: ' + this.sufferer.damage + ' | ' + 'Defense: ' + this.sufferer.defense });
    this.consoleHistory.push({ message: 'Sensibility: ' + this.sufferer.sensibility + ' | ' + 'Stoicism: ' + this.sufferer.stoicism });
    this.consoleHistory.push({ message: 'Accuracy: ' + this.sufferer.accuracy });
    this.consoleHistory.push({ message: 'Deaths: ' + this.sufferer.deaths });
    for (const action of this.basicActions) {
      this.consoleHistory.push({ message: action, link: true});
    }
  }

  statChanges(encounter: Encounter) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < encounter.affectedStats.length; i++) {
      switch (encounter.affectedStats[i]) {
        case 'health':
          this.sufferer.health += encounter.statChange[i];
          break;
        case 'maxHealth':
          this.sufferer.maxHealth += encounter.statChange[i];
          break;
        case 'damage':
          this.sufferer.damage += encounter.statChange[i];
          break;
        case 'accuracy':
          this.sufferer.accuracy += encounter.statChange[i];
          break;
        case 'defense':
          this.sufferer.defense += encounter.statChange[i];
          break;
        case 'sensibility':
          this.sufferer.sensibility += encounter.statChange[i];
          break;
        case 'stoicism':
          this.sufferer.stoicism += encounter.statChange[i];
          break;
        case 'healthFull':
          this.sufferer.health = this.sufferer.maxHealth;
          break;
        case 'all':
            this.sufferer.maxHealth += encounter.statChange[i];
            this.sufferer.damage += encounter.statChange[i];
            this.sufferer.defense += encounter.statChange[i];
            this.sufferer.accuracy += encounter.statChange[i];
            this.sufferer.defense += encounter.statChange[i];
            this.sufferer.sensibility += encounter.statChange[i];
            this.sufferer.stoicism += encounter.statChange[i];
          }
    }
  }

  statChecker(stat: string, req: number) {
    switch (stat) {
      case 'health':
        if (this.sufferer.health >= req) { return true; }
        break;
      case 'maxHealth':
          if (this.sufferer.maxHealth >= req) { return true; }
          break;
      case 'damage':
          if (this.sufferer.damage >= req) { return true; }
          break;
      case 'accuracy':
          if (this.sufferer.accuracy >= req) { return true; }
          break;
      case 'defense':
          if (this.sufferer.defense >= req) { return true; }
          break;
      case 'sensibility':
          if (this.sufferer.sensibility >= req) { return true; }
          break;
      case 'stoicism':
          if (this.sufferer.stoicism >= req) { return true; }
          break;
      case 'deaths':
        if (this.sufferer.deaths >= req) { return true; }
        break;
      case 'all':
        if (this.sufferer.accuracy >= req
            && this.sufferer.damage >= req
            && this.sufferer.defense >= req
            && this.sufferer.maxHealth >= req
            && this.sufferer.sensibility >= req
            && this.sufferer.stoicism >= req) {
              return true;
            }
        break;
    }
    return false;
  }

  calculateSuffering() {
    const earnings = (this.sufferer.accuracy
                    + this.sufferer.damage
                    + this.sufferer.defense
                    + this.sufferer.sensibility
                    + this.sufferer.stoicism
                    + this.sufferer.maxHealth)
                    - 93;
    if (earnings > 0) { return Math.floor(earnings / 200); } else { return 0; }
  }
}

