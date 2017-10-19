import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: "home",
    component: HomeComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule,
    ]
})
export class HomeModule { }
