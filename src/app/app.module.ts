import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes, PreloadingStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


class HackagesStragModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
      return route.data && route.data.load? fn(): Observable.of(null);
    }
  }

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "user",
    data: {
      load: true
    },
    loadChildren: "./user/user.module"
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [HackagesStragModules],
  imports: [
    BrowserModule,
    HomeModule,
    
    RouterModule.forRoot(routes, {preloadingStrategy: HackagesStragModules}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
