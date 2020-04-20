import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgPlaygroundComponent } from './svg-playground.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SvgPlaygroundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SvgPlaygroundComponent]
})
export class SvgPlaygroundModule { }
