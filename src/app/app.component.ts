import { Component } from '@angular/core';
import { RegistrarService } from './registrar.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excersize-in-futility';
  record;

  constructor(private registrar: RegistrarService) {
    this.record = registrar.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(() => this.record = registrar.record);
  }
}
