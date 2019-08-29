import { Component } from '@angular/core';
import { RegistrarService } from './registrar.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MultiplyAnguishService } from './multiply-anguish.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excersize-in-futility';
  record;

  constructor(public registrar: RegistrarService, public multiply: MultiplyAnguishService, private route: ActivatedRoute) {
    this.record = registrar.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(() => this.record = registrar.record);
  }
}
