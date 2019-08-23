import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from '../../record-of-existance';
import { RegistrarService } from '../../registrar.service';

@Component({
  selector: 'app-existance-efficiency-modifier',
  templateUrl: './existance-efficiency-modifier.component.html',
  styleUrls: ['./existance-efficiency-modifier.component.scss']
})
export class ExistanceEfficiencyModifierComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  accumulateDespair() {
    this.registrar.accumulateDespair();
  }

  wallowInDread() {
    this.registrar.wallowInDread();
  }

  browseTheInternet() {
    this.registrar.browseTheInternet()
  }

  takeOutStudentLoans() {
    this.registrar.takeOutStudentLoans()
  }
}
