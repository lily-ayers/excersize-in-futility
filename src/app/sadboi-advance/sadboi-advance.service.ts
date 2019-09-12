import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SadboiMessage } from './sadboi-message';
import { Observable, interval, Subscription } from 'rxjs';
import { encounters } from '../../assets/random-encounters.json';
import { Sufferer } from './sufferer';
import { Encounter } from './encounter';
import { enemies } from '../../assets/enemies.json';
import { equipment } from '../../assets/equipment.json';
import { RegistrarService } from '../existance/registrar.service';

@Injectable({
  providedIn: 'root'
})
export class SadboiAdvanceService {
  areas = ['The Wastes', 'The Highway', 'The Gutter', 'The Colony'];
  consoleHistory: SadboiMessage[];
  sufferer: Sufferer;
  encounters = JSON.parse(JSON.stringify(encounters));
  enemies = JSON.parse(JSON.stringify(enemies));
  equipment = JSON.parse(JSON.stringify(equipment));
  enemy;
  equipmentInQuestion;
  currentEncounter;
  activateGame = false;
  userProgress = this.registrar.record.eternalSuffering > 0 ? this.registrar.record.eternalSuffering : this.registrar.record.dejaVu;
  // Track which area the sufferer is in
  restSubscription: Subscription;
  restTime = 0;
  restGains = 0;
  resting = false;
  instance = false;
  combatInstance = false;
  basicActions = ['help', 'wander', 'rest', 'retire', 'purpose'];
  instanceActions: string[];
  instanceFollowUps: number[];
  // Special instances include retiring, and eventually more.
  // 666555 means retirement, as in US, UK, and AUS retirement ages
  // 909090 means wake, as in "ZZZ"
  // 404404 means End instance, as in Not Found
  // 777777 means death
  // 987654321 means initial PA encounter (fix sadboi)
  // 989898 means equip new piece
  // 979797 means don't equip new piece
  specialInstances = [666555, 909090, 404404, 200200, 999999, 777777, 989898, 987654321, 979797];

  constructor(private registrar: RegistrarService) {
    if (localStorage.getItem('EIF-sufferer')) {
      this.sufferer = JSON.parse(localStorage.getItem('EIF-sufferer')) as Sufferer;
    } else {
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        strength: 2,
        accuracy: 75,
        defense: 2,
        sensibility: 2,
        stoicism: 2,
        deaths: 0,
        worldProgress: 0,
        inventory: [],
        equipment: [{equipped: false}, {equipped: false}, {equipped: false},
          {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}]
      };
      localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer));
    }
    this.registrar.theUnforgivingForwardMarchOfTimeAndDecay
      .subscribe(data => localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer)));
    if (localStorage.getItem('EIF-sadboiTrigger')) {
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.activateGame = true;
      this.instanceActions = [...this.basicActions];
      this.printActions();
    } else {
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Personal Assistant! You now have 10 less stress! '
        + '(Thank you for purchasing Sadboi Personal Assistant, for any bugs or errors, please contact 555-IAMASADBOI)' }
      ];
    }
  }

  renewSufferer() {
    this.sufferer = {
      maxHealth: 10,
      health: 10,
      strength: 2,
      accuracy: 75,
      defense: 2,
      sensibility: 2,
      stoicism: 2,
      deaths: 0,
      worldProgress: 0,
      inventory: [],
      equipment: [{equipped: false}, {equipped: false}, {equipped: false},
        {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}]
    };
    localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer));
    this.encounters = JSON.parse(JSON.stringify(encounters));
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
      this.sufferer.accuracy += 100;
      this.sufferer.defense += 100;
      this.sufferer.maxHealth += 100;
      this.sufferer.sensibility += 100;
      this.sufferer.stoicism += 100;
      this.sufferer.strength += 100;
      this.retireInfo();
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

  submitCombat(input: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.instanceActions.length; i++) {
      if (input.toLowerCase().includes(this.instanceActions[i])) {
        this.executeCombatAction(this.instanceFollowUps[i]);
        return;
      }
    }
  }

  printActions() {
    this.consoleHistory.push({ message: 'Available Actions: ' });
    for (const action of this.instanceActions) {
      this.consoleHistory.push({ message: action, link: true});
    }
  }

  help() {
    this.consoleHistory.push({ message: 'Commands  |   Actions' });
    this.consoleHistory.push({ message: 'wander    |   Waste time wandering ' + this.areas[this.sufferer.worldProgress] });
    this.consoleHistory.push({ message: 'rest      |   Rest for a while and regain some health' });
    this.consoleHistory.push({ message: 'retire    |   Retire your current sufferer' });
    this.consoleHistory.push({ message: 'purpose   |   Display info about retiring' });
    this.printActions();
  }

  wander() {
    this.consoleHistory.push({ message: 'Wandering ' + this.areas[this.sufferer.worldProgress] });
    this.encounter((Math.floor(Math.random() * 10) * 10) + (100 * (this.sufferer.worldProgress)));
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
    this.instanceFollowUps = [909090];
    this.printActions();
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
    this.instanceActions = [...this.basicActions];
    this.printActions();
  }

  retire() {
    this.instance = true;
    this.consoleHistory.push({ message: 'Retire for ' + this.calculateSuffering() + ' Deja Vu?' });
    this.instanceActions = ['y', 'n'];
    this.instanceFollowUps = [666555, 404404];
    this.printActions();
  }

  retireInfo() {
    // tslint:disable-next-line: max-line-length
    this.consoleHistory.push({ message: 'Retiring your sufferer earns you Deja Vu. You will earn Deja Vu equivalent to the sum of your Sufferers stats minus base values, divided by 200.' });
  }

  async encounter(encounterID: number, equipmentRepeat: any = null) {
    this.instance = false;
    if (!this.specialInstances.includes(encounterID)) {
      let encounter: Encounter = JSON.parse(JSON.stringify(this.encounters[encounterID]));
      if (equipmentRepeat === null) {
        this.consoleHistory.push({ message: encounter.message });
      }
      if (encounter.perk && !this.sufferer.inventory.includes(encounter.perk)) {
        this.sufferer.inventory.push(encounter.perk);
        this.consoleHistory.push({ message: 'Gained Perk: ' + encounter.perk, small: true });
      }
      await new Promise(resolve => setTimeout(resolve, 500));
      if (encounter.affectedStats && encounter.statChange && equipmentRepeat === null) {
        this.statChanges(encounter);
      }
      if (this.sufferer.health <= 0 && encounterID !== 7) {
        this.encounter(7);
      } else if (encounter.equipment && equipmentRepeat === null) {
          this.currentEncounter = encounterID;
          this.equipmentUpdate(encounter.equipmentType[0], this.equipment.find(data => data.name === encounter.equipment[0]));
          this.encounters = JSON.parse(JSON.stringify(encounters));
      } else if (encounter.actions) {
        this.instance = true;
        this.instanceFollowUps = encounter.followUps;
        this.instanceActions = encounter.actions;
        if (encounter.enemy) {
          this.enemy = this.enemies.find(data => data.name === encounter.enemy);
          console.log(this.enemy);
        }
        encounter = this.getAdditionalActions(encounter);
        this.printActions();
      } else if (encounter.followUps) {
      this.encounter(encounter.followUps[0]);
      }
    } else if (encounterID === 909090) {
      this.wake();
    } else if (encounterID === 404404) {
      this.consoleHistory.push({ message: 'What now, hotshot?' });
      this.instanceActions = [...this.basicActions];
      this.printActions();
    } else if (encounterID === 777777) {
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.instance = false;
      this.combatInstance = false;
      this.instanceActions = [...this.basicActions];
      this.printActions();
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        strength: 2,
        accuracy: 75,
        defense: 2,
        sensibility: 2,
        stoicism: 2,
        worldProgress: 0,
        inventory: [],
        deaths: this.sufferer.deaths + 1,
        equipment: [{equipped: false}, {equipped: false}, {equipped: false},
          {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}, {equipped: false}]
      };
    } else if (encounterID === 666555) {
      this.registrar.record.dejaVu += this.calculateSuffering();
      this.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.instanceActions = [...this.basicActions];
      this.printActions();
      this.renewSufferer();
    } else if (encounterID === 200200) {
      this.sufferer.worldProgress++;
      this.instanceActions = [...this.basicActions];
      this.printActions();
    } else if (encounterID === 999999) {
      this.initiateCombat(this.enemy);
    } else if (encounterID === 987654321) {
      this.consoleHistory.push({ message: 'error... error. You really arent qualified to fix this machine,'
        + 'and also you dont understand why you should have to fix something you just bought. This is bullshit. (stress + 25)' });
      this.registrar.record.stress += 25;
    } else if (encounterID === 989898) {
      this.newEquipmentStats();
      this.encounter(this.currentEncounter, 1);
    } else if (encounterID === 979797) {
      this.encounter(this.currentEncounter, 1);
    }
  }

  getAdditionalActions(encounter: Encounter): Encounter {
    if (encounter.actionSkillCheck) {
      let i = 0;
      for (const check of encounter.actionSkillCheck) {
        if (!this.statChecker(check[0], check[1])) {
          this.instanceFollowUps[i] = +check[2];
        }
        i++;
      }
    }
    if (encounter.actionRequirements) {
      for (const req of encounter.actionRequirements) {
        if (!this.instanceActions.includes(req[2]) && this.statChecker(req[0], req[1])) {
          this.instanceActions.push(req[2]);
          this.instanceFollowUps.push(+req[3]);
        }
      }
    }
    return encounter;
  }

  initiateCombat(enemy: string) {
    this.combatInstance = true;
    const encounter = JSON.parse(JSON.stringify(encounters[79]));
    this.instanceActions = encounter.actions;
    this.instanceFollowUps = encounter.followUps;
    this.getAdditionalActions(encounter);
    this.printActions();
  }

  executeCombatAction(actionID: number) {
    switch (actionID) {
      case 6:
        this.consoleHistory.push({ message: 'You punch the ' + this.enemy.name
          + ' for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 10) + ' damage'});
        this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 10);
        if (this.enemy.health <= 0) {
          this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
          this.statChanges(this.enemy);
          this.enemy = null;
          this.combatInstance = false;
          this.instanceActions = [...this.basicActions];
          this.printActions();
        } else {
          this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 5:
          this.consoleHistory.push({ message: 'You FIRE punch the ' + this.enemy.name
              + ' for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 5) + ' damage'});
          this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 5);
          if (this.enemy.health <= 0) {
              this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
              this.statChanges(this.enemy);
              this.enemy = null;
              this.combatInstance = false;
              this.instanceActions = [...this.basicActions];
              this.printActions();
          } else {
              this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
              this.executeCombatEnemyTurn(false);
          }
          break;
      case 7:
          this.consoleHistory.push({ message: 'You brace yourself for the ' + this.enemy.name + 's coming attack.' });
          this.executeCombatEnemyTurn(true);
          break;
      case 14:
          this.consoleHistory.push({ message: 'You brace yourself EPICLY for the ' + this.enemy.name + 's coming attack.' });
          this.executeCombatEnemyTurn(true, true);
          break;
      case 8:
        if (this.sufferer.sensibility * Math.random() > this.enemy.obsession) {
          this.consoleHistory.push({ message: 'You slip away, leaving the ' + this.enemy.name + ' to their own business' });
          this.combatInstance = false;
          this.enemy = null;
          this.instanceActions = [...this.basicActions];
          this.printActions();
        } else {
          this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' catches you trying to escape and attacks!' });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 15:
        if (this.sufferer.sensibility * 2 * Math.random() > this.enemy.obsession) {
          this.consoleHistory.push({ message: 'You slip away, leaving the ' + this.enemy.name + ' to their own business' });
          this.combatInstance = false;
          this.enemy = null;
          this.instanceActions = [...this.basicActions];
          this.printActions();
        } else {
          this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' catches you trying to escape and attacks!' });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 0:
        if ((Math.random() * this.sufferer.accuracy) / 8 > this.enemy.speed) {
          this.consoleHistory.push({ message: 'ITS CLOBBERIN TIME!!! You swing your fists at the ' + this.enemy.name
              + ' for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 7) + ' damage'});
          this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 7);
        } else {
          this.consoleHistory.push({ message: 'ITS CLOBBERIN TIME!!! ........You miss tho.' });
        }
        if (this.enemy.health <= 0) {
          this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
          this.statChanges(this.enemy);
          this.enemy = null;
          this.combatInstance = false;
          this.instanceActions = [...this.basicActions];
          this.printActions();
        } else {
          this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 9:
          if ((Math.random() * this.sufferer.accuracy) / 8 > this.enemy.speed) {
              this.consoleHistory.push({ message: 'ITS CLOBBERIN TIME!!! You swing your FLAMING fists at the ' + this.enemy.name
                  + ' for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 3) + ' damage'});
              this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 3);
          } else {
              this.consoleHistory.push({ message: 'ITS CLOBBERIN TIME!!! ........You miss tho.' });
          }
          if (this.enemy.health <= 0) {
              this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
              this.statChanges(this.enemy);
              this.enemy = null;
              this.combatInstance = false;
              this.instanceActions = [...this.basicActions];
              this.printActions();
          } else {
              this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
              this.executeCombatEnemyTurn(false);
          }
          break;
      case 1:
          if (Math.random() * this.sufferer.accuracy / 5 > this.enemy.speed) {
            this.consoleHistory.push({ message: 'Slashy slashy - You swing your '
              + this.sufferer.equipment[4].name + ' at the ' + this.enemy.name
              + ' for ' + Math.floor((this.sufferer.strength + this.sufferer.equipment[4].strength - this.enemy.defense) / 10)
              + ' damage'});
            this.enemy.health -= Math.floor((this.sufferer.strength + this.sufferer.equipment[4].strength - this.enemy.defense) / 10);
          } else {
            this.consoleHistory.push({ message: 'You swing your ' + this.sufferer.equipment[4].name
              +  ' at a nearby innocent tree. The ' + this.enemy.name + ' laughs at you. Honestly, so do I.' });
          }
          if (this.enemy.health <= 0) {
            this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
            this.statChanges(this.enemy);
            this.enemy = null;
            this.combatInstance = false;
            this.instanceActions = [...this.basicActions];
            this.printActions();
          } else {
            this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
            this.executeCombatEnemyTurn(false);
          }
          break;
      case 10:
          if (Math.random() * this.sufferer.accuracy / 5 > this.enemy.speed) {
            this.consoleHistory.push({ message: 'SUPER slashy - You swing your '
              + this.sufferer.equipment[4].name + ' at the ' + this.enemy.name
              + ' for ' + Math.floor((this.sufferer.strength + (this.sufferer.equipment[4].strength * 2) - this.enemy.defense) / 10)
              + ' damage'});
            this.enemy.health -= Math.floor((this.sufferer.strength + (this.sufferer.equipment[4].strength * 2) - this.enemy.defense) / 10);
          } else {
            this.consoleHistory.push({ message: 'You swing your ' + this.sufferer.equipment[4].name
              +  ' at a nearby innocent tree. The ' + this.enemy.name + ' laughs at you. Honestly, so do I.' });
          }
          if (this.enemy.health <= 0) {
            this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
            this.statChanges(this.enemy);
            this.enemy = null;
            this.combatInstance = false;
            this.instanceActions = [...this.basicActions];
            this.printActions();
          } else {
            this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
            this.executeCombatEnemyTurn(false);
          }
          break;
      case 2:
        if (this.sufferer.stoicism * Math.random() / 5 >= this.enemy.confidence) {
          if (this.enemy.strength >= 1) {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' looks uncomfortable.' });
            this.enemy.strength--;
          } else {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' is already as uncomfortable as they can be.' });
          }
        } else {
          this.consoleHistory.push({ message: 'The ' + this.enemy.name
            + ' is annoyed at your weak intimidation tactics, and strikes immediately..' });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 11:
        if (this.sufferer.stoicism * Math.random() / 2 >= this.enemy.confidence) {
          if (this.enemy.strength >= 1) {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' looks uncomfortable.' });
            this.enemy.strength--;
          } else {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' is already as uncomfortable as they can be.' });
          }
        } else {
          this.consoleHistory.push({ message: 'The ' + this.enemy.name
            + ' is annoyed at your weak intimidation tactics, and strikes immediately..' });
          this.executeCombatEnemyTurn(false);
        }
        break;
      case 3:
          if (this.sufferer.sensibility * Math.random() / 5 >= this.enemy.intelligence) {
            if (this.enemy.defense >= 1) {
              this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' falls for it and looks behind them!' });
              this.enemy.defense--;
            } else {
              this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' is already distracted.' });
            }
          } else {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name
              + ' sees right through your trick. Luckily it has a great sense of humour, if you think being attacked is funny.' });
            this.executeCombatEnemyTurn(false);
          }
          break;
      case 12:
          if (this.sufferer.sensibility * Math.random() / 2 >= this.enemy.intelligence) {
            if (this.enemy.defense >= 1) {
              this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' falls for it and looks behind them!' });
              this.enemy.defense--;
            } else {
              this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' is already distracted.' });
            }
          } else {
            this.consoleHistory.push({ message: 'The ' + this.enemy.name
              + ' sees right through your trick. Luckily it has a great sense of humour, if you think being attacked is funny.' });
            this.executeCombatEnemyTurn(false);
          }
          break;
      case 4:
          if (this.sufferer.accuracy * Math.random() / 7 >= this.enemy.speed) {
            this.consoleHistory.push({ message: 'With a snicker-snack, yopu thrust the vorpal sword (in this case, your finger) into the '
            + this.enemy.name + 's eye for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 5) + ' damage'});
            this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 5);
          } else {
            this.consoleHistory.push({ message: 'You thrust your finger towards the ' + this.enemy.name
              // tslint:disable-next-line: max-line-length
              + ' eye, but you end up missing and picking their nose. Its weird and awkward for everyone involved. They decide to just move on for both of your sakes.' });
          }
          if (this.enemy.health <= 0) {
            this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
            this.statChanges(this.enemy);
            this.enemy = null;
            this.combatInstance = false;
            this.instanceActions = [...this.basicActions];
            this.printActions();
          } else {
            this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
            this.executeCombatEnemyTurn(false);
          }
          break;
      case 13:
          if (this.sufferer.accuracy * Math.random() / 6 >= this.enemy.speed) {
            this.consoleHistory.push({ message: 'With a snicker-snack, yopu thrust the vorpal sword (in this case, your finger) into the '
            + this.enemy.name + 's eye for ' + Math.floor((this.sufferer.strength - this.enemy.defense) / 2) + ' damage'});
            this.enemy.health -= Math.floor((this.sufferer.strength - this.enemy.defense) / 2);
          } else {
            this.consoleHistory.push({ message: 'You thrust your finger towards the ' + this.enemy.name
              // tslint:disable-next-line: max-line-length
              + ' eye, but you end up missing and picking their nose. Its weird and awkward for everyone involved. They decide to just move on for both of your sakes.' });
          }
          if (this.enemy.health <= 0) {
            this.consoleHistory.push({ message: 'You have defeated the ' + this.enemy.name + ' and earned ' + this.enemy.gainsString });
            this.statChanges(this.enemy);
            this.enemy = null;
            this.combatInstance = false;
            this.instanceActions = [...this.basicActions];
            this.printActions();
          } else {
            this.consoleHistory.push({ message: this.enemy.name + ' remaining Health: ' + this.enemy.health });
            this.executeCombatEnemyTurn(false);
          }
          break;
    }
  }

  executeCombatEnemyTurn(defending: boolean, superDefending?: boolean) {
    const action = this.enemy.abilities[Math.floor(Math.random() * this.enemy.abilities.length)];
    this.consoleHistory.push({ message: 'The ' + this.enemy.name + ' ' + action[0] });
    if ((Math.random() * 101) + (this.sufferer.sensibility / 25) <= +action[1]) {
      if (superDefending) {
        this.sufferer.health -= (this.enemy.strength * +action[2]) / 4;
        this.consoleHistory.push({ message: 'You were hit for ' + (this.enemy.strength * +action[2])  / 2 + ' damage!' });
      } else if (defending) {
        this.sufferer.health -= (this.enemy.strength * +action[2]) / 2;
        this.consoleHistory.push({ message: 'You were hit for ' + (this.enemy.strength * +action[2])  / 2 + ' damage!' });
      } else {
        this.sufferer.health -= (this.enemy.strength * +action[2]);
        this.consoleHistory.push({ message: 'You were hit for ' + (this.enemy.strength * +action[2]) + ' damage!' });
      }
    } else {
      this.consoleHistory.push({ message: 'You dodged! ...Or they missed, one or the other. Point is, no damage, score!' });
    }
    if (this.sufferer.health > 0) {
      this.printActions();
    } else {
      this.encounter(7);
    }
  }

  statChanges(encounter: Encounter) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < encounter.affectedStats.length; i++) {
      if (this.registrar.record.perks.includes('Double Stat Gains')) {
        encounter.statChange[i] *= 2;
      }
      switch (encounter.affectedStats[i]) {
        case 'health':
          this.sufferer.health += encounter.statChange[i];
          break;
        case 'maxHealth':
          this.sufferer.maxHealth += encounter.statChange[i];
          break;
        case 'strength':
          this.sufferer.strength += encounter.statChange[i];
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
        case 'deaths':
          this.sufferer.deaths += encounter.statChange[i];
          break;
        case 'all':
          this.sufferer.maxHealth += encounter.statChange[i];
          this.sufferer.strength += encounter.statChange[i];
          this.sufferer.defense += encounter.statChange[i];
          this.sufferer.accuracy += encounter.statChange[i];
          this.sufferer.defense += encounter.statChange[i];
          this.sufferer.sensibility += encounter.statChange[i];
          this.sufferer.stoicism += encounter.statChange[i];
          break;
      }
    }
  }

  statChecker(stat: string, req: any) {
    switch (stat) {
      case 'health':
        if (this.sufferer.health >= +req) { return true; }
        break;
      case 'maxHealth':
          if (this.sufferer.maxHealth >= +req) { return true; }
          break;
      case 'strength':
          if (this.sufferer.strength >= +req) { return true; }
          break;
      case 'accuracy':
          if (this.sufferer.accuracy >= +req) { return true; }
          break;
      case 'defense':
          if (this.sufferer.defense >= +req) { return true; }
          break;
      case 'sensibility':
          if (this.sufferer.sensibility >= +req) { return true; }
          break;
      case 'stoicism':
          if (this.sufferer.stoicism >= +req) { return true; }
          break;
      case 'deaths':
        if (this.sufferer.deaths >= +req) { return true; }
        break;
      case 'weapon':
        if (this.sufferer.equipment[4].equipped) { return true; }
        break;
      case 'all':
        if (this.sufferer.accuracy >= +req
            && this.sufferer.strength >= +req
            && this.sufferer.defense >= +req
            && this.sufferer.maxHealth >= +req
            && this.sufferer.sensibility >= +req
            && this.sufferer.stoicism >= +req) {
              return true;
            }
        break;
      case 'perk':
        if (this.sufferer.inventory.includes(req)) {
          return true;
        }
        break;
    }
    return false;
  }

  // tslint:disable-next-line: no-shadowed-variable
  equipmentUpdate(type: string, equipment: any) {
    let index = -1;
    switch (type) {
      case 'head':
        index = 0;
        break;
      case 'neck':
        index = 1;
        break;
      case 'chest':
        index = 2;
        break;
      case 'armguards':
        index = 3;
        break;
      case 'rightHand':
        index = 4;
        break;
      case 'leftHand':
        index = 5;
        break;
      case 'belt':
        index = 6;
        break;
      case 'pants':
        index = 7;
        break;
      case 'shoes':
        index = 8;
        break;
    }
    if (!this.sufferer.equipment[index].equipped) {
      this.equipmentInQuestion = [index, equipment];
      this.newEquipmentStats();
      this.consoleHistory.push({ message: 'You equipped the ' + equipment.name + '!', small: true });
      this.instanceActions = [...this.basicActions];
      this.encounter(this.currentEncounter, 1);
    } else if (this.sufferer.equipment[index].name !== equipment.name) {
      this.consoleHistory.push({ message: 'You found a ' + equipment.name, small: true });
      this.instanceActions = ['equip new item', 'keep old item'];
      this.instanceFollowUps = [989898, 979797];
      this.consoleHistory.push({ message: 'Looks like you already have something equipped in that slot, though...', small: true });
      this.printEquipmentStats(this.sufferer.equipment[index], false);
      this.printEquipmentStats(equipment, true);
      this.consoleHistory.push({ message: 'Would you like to equip the new item?', small: true });
      this.equipmentInQuestion = [index, equipment];
      this.instance = true;
      this.printActions();
    } else {
      this.consoleHistory.push({ message: 'You found a ' + equipment.name, small: true });
      this.consoleHistory.push({ message: 'You already have one of those equipped, though!', small: true });
      this.encounter(this.currentEncounter, 1);
    }
  }

  printEquipmentStats(newEquipment: any, newItem: boolean) {
    if (!newItem) {
      this.consoleHistory.push({ message: 'Equipped: ' + newEquipment.name });
    } else {
      this.consoleHistory.push({ message: 'New Item: ' + newEquipment.name });
    }
    if (newEquipment.strength) {
      this.consoleHistory.push({ message: 'Strength: ' + newEquipment.strength });
    }
    if (newEquipment.defense) {
      this.consoleHistory.push({ message: 'Defense: ' + newEquipment.defense });
    }
    if (newEquipment.sensibility) {
      this.consoleHistory.push({ message: 'Sensibility: ' + newEquipment.sensibility });
    }
    if (newEquipment.stoicism) {
      this.consoleHistory.push({ message: 'Stoicism: ' + newEquipment.stoicism });
    }
    if (newEquipment.accuracy) {
      this.consoleHistory.push({ message: 'Accuracy: ' + newEquipment.accuracy });
    }
    if (newEquipment.maxHealth) {
      this.consoleHistory.push({ message: 'Max Health: ' + newEquipment.maxHealth });
    }
  }

  newEquipmentStats() {
    if (this.sufferer.equipment[this.equipmentInQuestion[0]].equipped) {
      const oldEquip = this.sufferer.equipment[this.equipmentInQuestion[0]];
      if (oldEquip.strength) {
        this.sufferer.strength -= oldEquip.strength;
      }
      if (oldEquip.defense) {
        this.sufferer.defense -= oldEquip.defense;
      }
      if (oldEquip.accuracy) {
        this.sufferer.accuracy -= oldEquip.accuracy;
      }
      if (oldEquip.sensibility) {
        this.sufferer.sensibility -= oldEquip.sensibility;
      }
      if (oldEquip.stoicism) {
        this.sufferer.stoicism -= oldEquip.stoicism;
      }
      if (oldEquip.maxHealth) {
        this.sufferer.maxHealth -= oldEquip.maxHealth;
      }
    }
    const newEquip = this.equipmentInQuestion[1];
    if (newEquip.strength) {
      this.sufferer.strength += newEquip.strength;
    }
    if (newEquip.defense) {
      this.sufferer.defense += newEquip.defense;
    }
    if (newEquip.accuracy) {
      this.sufferer.accuracy += newEquip.accuracy;
    }
    if (newEquip.sensibility) {
      this.sufferer.sensibility += newEquip.sensibility;
    }
    if (newEquip.stoicism) {
      this.sufferer.stoicism += newEquip.stoicism;
    }
    if (newEquip.maxHealth) {
      this.sufferer.maxHealth += newEquip.maxHealth;
    }
    this.sufferer.equipment[this.equipmentInQuestion[0]] = this.equipmentInQuestion[1];
    this.sufferer.equipment[this.equipmentInQuestion[0]].equipped = true;
  }

  calculateSuffering() {
    const earnings = (this.sufferer.accuracy
                    + this.sufferer.strength
                    + this.sufferer.defense
                    + this.sufferer.sensibility
                    + this.sufferer.stoicism
                    + this.sufferer.maxHealth)
                    - 93;
    if (earnings > 0) { return Math.floor(earnings / 200); } else { return 0; }
  }
}

