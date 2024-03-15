import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientModule } from './client/client.module';
import { LoanModule } from './loan/loan.module';
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {AppMaterialModule} from "../shared/app-material/app-material.module";


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    ClientModule,
    LoanModule,
    MatListModule,
    MatTabsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
