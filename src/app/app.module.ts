import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import {mooaPlatform} from 'mooa';

const appRoutes: Routes = [
  {path: '*', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
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
