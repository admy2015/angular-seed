import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  { 
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false 
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
