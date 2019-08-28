import { Component } from '@angular/core';
import { RegistrarService } from './registrar.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MultiplyAnguishService } from './multiply-anguish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excersize-in-futility';
  record;

  constructor(private registrar: RegistrarService, public multiply: MultiplyAnguishService) {
    this.record = registrar.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(() => this.record = registrar.record);
  }
}
