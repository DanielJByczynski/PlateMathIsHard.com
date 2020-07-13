import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { MetricCalculatorComponent } from './metric-calculator/metric-calculator.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'metric', component: MetricCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
