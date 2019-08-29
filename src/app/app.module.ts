import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualExistanceComponent } from './components/manual-existance/manual-existance.component';
import { ExistanceStatusComponent } from './components/existance-status/existance-status.component';
import { ExistanceOutsourcingComponent } from './components/existance-outsourcing/existance-outsourcing.component';
import { ExistanceOutsourcingStatusComponent } from './components/existance-outsourcing-status/existance-outsourcing-status.component';
import { ExistanceEfficiencyModifierComponent } from './components/existance-efficiency-modifier/existance-efficiency-modifier.component';
import { CloningMachineComponent } from './components/cloning-machine/cloning-machine.component';
import { TimeMachineComponent } from './components/time-machine/time-machine.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AscendExistanceComponent } from './components/ascend-existance/ascend-existance.component';
import { TranscendExistanceComponent } from './components/transcend-existance/transcend-existance.component';
import { BigNumPipe } from './big-num.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ManualExistanceComponent,
    ExistanceStatusComponent,
    ExistanceOutsourcingComponent,
    ExistanceOutsourcingStatusComponent,
    ExistanceEfficiencyModifierComponent,
    CloningMachineComponent,
    TimeMachineComponent,
    AscendExistanceComponent,
    TranscendExistanceComponent,
    BigNumPipe
    ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
