import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DiagramComponent } from './calculator/diagram/diagram.component';
import { InstagramboxComponent } from './instagrambox/instagrambox.component';
import { MetricCalculatorComponent } from './metric-calculator/metric-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DiagramComponent,
    InstagramboxComponent,
    MetricCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
