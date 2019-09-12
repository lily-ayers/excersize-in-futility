import { Component, OnInit, Input } from '@angular/core';
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
  activatedGame = false;
  resetInput = new FormControl();
  visible;
  futileProgress = 0;

  constructor(public registrar: RegistrarService, private sadboi: SadboiAdvanceService) {
    if (localStorage.getItem('EIF-sadboiTrigger')) {
      this.activatedGame = true;
    }
  }

  ngOnInit() {
  }

  attemptExistance() {
    this.futileProgress = 1;
    this.record.stress += this.existManually();
    if (!this.sadboi.activateGame && this.record.triggerMarriage) {
      this.sadboi.consoleHistory.push({ message: responses[Math.floor(Math.random() * responses.length)] });
     }
    this.futileProgress = 0;
  }

  existManually(): number {
    let gain = Math.floor(((this.record.multipliersOwned[1] + 1)
      + ((this.record.multipliersOwned[4]) * 10)
      + ((this.record.multipliersOwned[5]) * 100)));
    gain += gain * (this.record.multipliersOwned[0] / 10);
    gain += gain * (this.record.dejaVu / 10);
    if (this.record.perks.includes('Double All Stress')) {
      gain *= 2;
    }
    if (this.record.perks.includes('Manual Stress + 20% of SPS')) {
      gain += (this.registrar.influenceGains() / 5);
    }
    return (gain / 4);
  }

  triggerSadboiBasic() {
    if (this.record.stress >= 10) {
      this.record.stress -= 10;
      this.record.triggerMarriage = true;
      this.activatedGame = false;
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
      this.sadboi.activateGame = false;
      this.sadboi.consoleHistory = [
        { message: 'Welcome to the Sadboi Personal Assistant! You now have 10 less stress! '
        + '(Thank you for purchasing Sadboi Personal Assistant, for any bugs or errors, please contact 555-IAMASADBOI)' }
      ];
    }
    this.resetInput.setValue('');
  }
}

