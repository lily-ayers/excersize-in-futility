import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-existance-outsourcing',
  templateUrl: './existance-outsourcing.component.html',
  styleUrls: ['./existance-outsourcing.component.scss']
})
export class ExistanceOutsourcingComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  contemplateNietchzhe() {
    this.registrar.contemplateNietchzhe();
  }

  lendSomeoneACigarette() {
    this.registrar.lendSomeoneACigarette();
  }

}
