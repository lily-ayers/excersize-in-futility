import { Component, OnInit, Inject, Input } from '@angular/core';
import { RegistrarService } from 'src/app/existance/registrar.service';
import { RecordOfExistance } from 'src/app/existance/record-of-existance';
import { SadboiAdvanceService } from 'src/app/sadboi-advance/sadboi-advance.service';
import { responses } from 'src/assets/try-to-exist-responses.json';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manual-existance',
  templateUrl: './manual-existance.component.html',
  styleUrls: ['./manual-existance.component.scss']
})
export class ManualExistanceComponent implements OnInit {
  @Input() record: RecordOfExistance;
  // Percentage tracker for progress bar
  futileProgress = 0;
  automateAgony = false;
  activatedGame = false;
  resetInput = new FormControl();

  constructor(private registrar: RegistrarService, private sadboi: SadboiAdvanceService) {
    if (localStorage.getItem('EIF-sadboiTrigger')) {
      this.activatedGame = true;
    }
   }

  ngOnInit() {
  }

  async attemptExistance() {
    if (this.futileProgress === 0) {
      this.futileProgress = 1;
      let delay = (50 / (1 + (this.record.multipliersOwned[0] / 10)));
      if (this.record.multipliersOwned[0] < 100) {
        for (this.futileProgress; this.futileProgress < 100; this.futileProgress++) {
          await this.delayTheInevitable(delay);
        }
      } else if (this.record.multipliersOwned[0] < 1000) {
        for (this.futileProgress; this.futileProgress < 101; this.futileProgress += 10) {
          await this.delayTheInevitable(delay * 10);
        }
      } else if (this.record.multipliersOwned[0] < 10000) {
        for (this.futileProgress; this.futileProgress < 101; this.futileProgress += 25) {
          await this.delayTheInevitable(delay * 25);
        }
      } else if (this.record.multipliersOwned[0] >= 100000) {
        this.futileProgress = 100;
        await this.delayTheInevitable(delay * 100);
      }
      this.futileProgress = 0;
      this.record.stress += this.existManually();
      if (!this.sadboi.activateGame && this.record.triggerMarriage) {
        this.sadboi.consoleHistory.push({ message: responses[Math.floor(Math.random() * responses.length)] });
      }
      if (this.automateAgony
        && !this.registrar.reinitializingDespair) {
        this.attemptExistance();
      } else {
        this.automateAgony = false;
      }
    }
  }

  existManually(): number {
    return Math.floor(((this.record.multipliersOwned[1] + 1)
      + ((this.record.multipliersOwned[4]) * 10)
      + ((this.record.multipliersOwned[5]) * 100))
      * (1 + (Math.pow(this.record.dejaVu, this.record.eternalSuffering + 1) / 10)));
  }

  private delayTheInevitable(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  triggerSadboiBasic() {
    if (this.record.stress >= 10) {
      this.record.stress -= 10;
      this.record.triggerMarriage = true;
      this.sadboi.instanceActions = ['fix sadboi'];
      this.sadboi.instanceFollowUps = [987654321];
      this.sadboi.instance = true;
      this.sadboi.printActions();
    }
  }

  triggerSadboiAdvance() {
    if (this.record.stress >= 1000) {
      this.record.stress -= 1000;
      this.sadboi.activateGame = true;
      this.activatedGame = true;
      localStorage.setItem('EIF-sadboiTrigger', 'true');
      this.sadboi.consoleHistory = [
        { message: 'Welcome to the Sadboi Advance - A Gaming Console for the Depressed Vagrant inside all of us!' }
      ];
      this.sadboi.instanceActions = [...this.sadboi.basicActions];
      this.sadboi.printActions();
    }
  }

  submitReset() {
    if (this.resetInput.value.toString() === 'HARD-RESET') {
      localStorage.clear();
      this.registrar.initializeBasicRecord();
    }
    this.resetInput.setValue('');
  }
}

