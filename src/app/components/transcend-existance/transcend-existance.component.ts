import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-transcend-existance',
  templateUrl: './transcend-existance.component.html',
  styleUrls: ['./transcend-existance.component.scss']
})
export class TranscendExistanceComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  transcend() {
    this.registrar.transcend();
  }
}
