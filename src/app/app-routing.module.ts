import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CustomPreloadingStrategy } from './core/router-preloading-strategy';


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
        preloadingStrategy: CustomPreloadingStrategy,
        enableTracing: false 
      }
    )
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
