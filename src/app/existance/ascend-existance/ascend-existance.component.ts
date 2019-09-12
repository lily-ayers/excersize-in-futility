import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/existance/registrar.service';
import { RecordOfExistance } from 'src/app/existance/record-of-existance';
import { SadboiAdvanceService } from 'src/app/sadboi-advance/sadboi-advance.service';

@Component({
  selector: 'app-ascend-existance',
  templateUrl: './ascend-existance.component.html',
  styleUrls: ['./ascend-existance.component.scss']
})
export class AscendExistanceComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService, private sadboi: SadboiAdvanceService) {

   }

  ngOnInit() {
  }

  ascend() {
    this.sadboi.consoleHistory = [
      { message: 'Welcome to the Sadboi Personal Assistant! You now have 10 less stress! '
      + '(Thank you for purchasing Sadboi Personal Assistant, for any bugs or errors, please contact 555-IAMASADBOI)' }
    ];
    this.sadboi.activateGame = false;
    this.registrar.ascend();
  }

  transcend() {
    this.sadboi.consoleHistory = [
      { message: 'Welcome to the Sadboi Personal Assistant! You now have 10 less stress! '
      + '(Thank you for purchasing Sadboi Personal Assistant, for any bugs or errors, please contact 555-IAMASADBOI)' }
    ];
    this.sadboi.activateGame = false;
    this.registrar.transcend();
  }
}
