import { Component, OnInit, Input } from '@angular/core';
import { RegistrarService } from 'src/app/registrar.service';
import { RecordOfExistance } from 'src/app/record-of-existance';

@Component({
  selector: 'app-ascend-existance',
  templateUrl: './ascend-existance.component.html',
  styleUrls: ['./ascend-existance.component.scss']
})
export class AscendExistanceComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) {

   }

  ngOnInit() {
  }

  ascend() {
    this.registrar.ascend();
  }

  transcend() {
    this.registrar.transcend();
  }
}
