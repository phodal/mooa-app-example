import {Component} from '@angular/core';
import {mooaPlatform} from 'mooa';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  navigateToApp1() {
    mooaPlatform.navigateTo({
      appName: 'help',
      router: 'home'
    });
  }

  constructor(private router: Router) {
    mooaPlatform.handleRouterUpdate(this.router, 'app1');
  }
}
