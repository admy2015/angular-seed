import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "feature-two",
        loadChildren: () => import('./feature-two.module').then(m => m.FeatureTwoModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureTwoRoutingModule { }