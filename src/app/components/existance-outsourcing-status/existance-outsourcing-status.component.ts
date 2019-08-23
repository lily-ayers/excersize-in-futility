import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';

@Component({
  selector: 'app-existance-outsourcing-status',
  templateUrl: './existance-outsourcing-status.component.html',
  styleUrls: ['./existance-outsourcing-status.component.scss']
})
export class ExistanceOutsourcingStatusComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor() { }

  ngOnInit() {
  }

}
