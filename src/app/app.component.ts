import { Component, OnInit } from '@angular/core';
import { RegistrarService } from './registrar.service';
import { MultiplyAnguishService } from './multiply-anguish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'excersize-in-futility';
  prepared = false;
  record;

  constructor(public registrar: RegistrarService, public multiply: MultiplyAnguishService) {
    registrar.theUnforgivingForwardMarchOfTimeAndDecay.subscribe(() => this.record = registrar.record);
    this.loadMisery();
  }

  ngOnInit() {
    this.registrar.initializeMisery();
    if (localStorage.getItem('EIF-timestamp')) {
      this.registrar.reimburse();
    }
  }

  async loadMisery() {
    for (let t = 1; t < 5; t++) {
      await this.delayTheInevitable();
    }
    this.prepared = true;
  }

  private delayTheInevitable() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
}
