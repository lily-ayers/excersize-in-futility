import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';
import { RecordOfExistance } from 'src/app/record-of-existance';

@Component({
  selector: 'app-existance-status',
  templateUrl: './existance-status.component.html',
  styleUrls: ['./existance-status.component.scss']
})
export class ExistanceStatusComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor() {}

  ngOnInit() {
  }



}
