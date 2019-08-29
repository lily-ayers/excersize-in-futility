import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SadboiMessage } from './sadboi-message';
import { Observable, interval, Subscription } from 'rxjs';
import { Sufferer } from './sufferer';
import { Encounter } from './encounter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SadboiAdvanceService {
  consoleHistory: string[] = [
    'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!'
  ];
  sufferer: Sufferer;
  encounters: Encounter[];
  restSubscription: Subscription;
  resting = false;
  instance = false;
  instanceActions: string[];
  instanceFollowUps: number[];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('EIF-sufferer')) {
      this.sufferer = JSON.parse(localStorage.getItem('EIF-sufferer')) as Sufferer;
    } else {
      this.sufferer = {
        maxHealth: 10,
        health: 10,
        damage: 2,
        accuracy: 75,
        defense: 2
      };
      localStorage.setItem('EIF-sufferer', JSON.stringify(this.sufferer));
    }
    this.http.get<Encounter[]>('../assets/random-encounters.json')
      .subscribe((encounterList: Encounter[]) => this.encounters = encounterList);
  }

  submit(input: string) {
    if (input.toLowerCase().includes('wake')) {
      this.wake();
    } else if (input.toLowerCase().includes('help')) {
      this.help();
    } else if (input.toLowerCase().includes('wander')) {
      this.wander();
    } else if (input.toLowerCase().includes('rest')) {
      this.rest();
    }
  }

  submitInstance(input: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.instanceActions.length; i++) {
      if (input.toLowerCase().includes(this.instanceActions[i])) {
        this.encounter(this.instanceFollowUps[i]);
      }
    }
  }

  help() {
    this.consoleHistory.push('Commands  |   Actions');
    this.consoleHistory.push('wander    |   Waste time wandering the wastelands');
    this.consoleHistory.push('rest      |   Rest for a while and regain some health');
  }

  wander() {
    this.consoleHistory.push('Wandering the wastes...');
    // Math.floor((Math.random() * 10) + 1)
    this.encounter(0);
  }

  rest() {
    this.resting = true;
    this.consoleHistory.push('Resting...');
    this.consoleHistory.push('Enter "wake" to stop resting.');
    const restTime = interval(1000);
    this.restSubscription = restTime.subscribe(seconds => {
      if ((this.sufferer.health < this.sufferer.maxHealth) && seconds % 5 === 0) {
        this.sufferer.health++;
      }
    });
  }

  wake() {
    if (this.resting) {
      this.resting = false;
      this.restSubscription.unsubscribe();
    } else {
      this.consoleHistory.push('You cant wake up unless you are resting, moron.');
    }
  }

  encounter(encounterID: number) {
    const encounter = this.encounters[encounterID];
    this.consoleHistory.push(encounter.message);
    if (encounter.affectedStat && encounter.statChange) {
      this.statChanges(encounter);
    }
    if (encounter.actions && encounter.followUps) {
      this.instanceActions = encounter.actions;
      this.instanceFollowUps = encounter.followUps;
    } else if (encounter.followUps) {
      this.encounter(encounter.followUps[0]);
    }
  }

  statChanges(encounter: Encounter) {

  }
}

