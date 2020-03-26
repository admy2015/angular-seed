import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "feature-one",
    loadChildren: () => import('./feature-one.module').then(m => m.FeatureOneModule),
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureOneRoutingModule { }
