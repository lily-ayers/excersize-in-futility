import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualExistanceComponent } from './existance/manual-existance/manual-existance.component';
import { ExistanceStatusComponent } from './existance/existance-status/existance-status.component';
import { ExistanceOutsourcingComponent } from './existance/existance-outsourcing/existance-outsourcing.component';
import { ExistanceOutsourcingStatusComponent } from './existance/existance-outsourcing-status/existance-outsourcing-status.component';
import { ExistanceEfficiencyModifierComponent } from './existance/existance-efficiency-modifier/existance-efficiency-modifier.component';
import { CloningMachineComponent } from './existance/cloning-machine/cloning-machine.component';
import { TimeMachineComponent } from './existance/time-machine/time-machine.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AscendExistanceComponent } from './existance/ascend-existance/ascend-existance.component';
import { BigNumPipe } from './big-num.pipe';
import { SadboiAdvanceComponent } from './sadboi-advance/sadboi-advance/sadboi-advance.component';
import { HttpClientModule } from '@angular/common/http';
import { SadboiColorComponent } from './sadboi-color/sadboi-color/sadboi-color.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    BigNumPipe,
    SadboiAdvanceComponent,
    SadboiColorComponent
    ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
