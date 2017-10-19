import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: "",
    component: UserComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [UserComponent],
    exports: [
        RouterModule,
    ]
})
export default class UserModule { }