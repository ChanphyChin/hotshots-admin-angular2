import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HerolistComponent} from "./herolist/herolist.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'herolist', component: HerolistComponent },
    { path: 'dashboard', component: DashboardComponent},
    {
        path:'detail/:id',
        component:HeroDetailComponent
    }
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}