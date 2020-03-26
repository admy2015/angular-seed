import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeatureOneComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeatureOneComponent]
})
export class FeatureOneModule { }
