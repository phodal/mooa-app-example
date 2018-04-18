import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {mooaPlatform} from 'mooa';

const appRoutes: Routes = [
  {
    path: '*', component: AppComponent
  },
  {
    path: 'home', loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: mooaPlatform.appBase()},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
