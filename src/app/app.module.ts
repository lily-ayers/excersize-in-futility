import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualExistanceComponent } from './components/manual-existance/manual-existance.component';
import { ExistanceStatusComponent } from './components/existance-status/existance-status.component';
import { ExistanceOutsourcingComponent } from './components/existance-outsourcing/existance-outsourcing.component';
import { ExistanceOutsourcingStatusComponent } from './components/existance-outsourcing-status/existance-outsourcing-status.component';
import { ExistanceEfficiencyModifierComponent } from './components/existance-efficiency-modifier/existance-efficiency-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualExistanceComponent,
    ExistanceStatusComponent,
    ExistanceOutsourcingComponent,
    ExistanceOutsourcingStatusComponent,
    ExistanceEfficiencyModifierComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
