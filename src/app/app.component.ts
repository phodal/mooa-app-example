import {Component} from '@angular/core';
import {mooaPlatform} from 'mooa';
import {Router} from '@angular/router';

function handleRouterUpdate(router: Router, appName: string) {
  window.addEventListener('mooa.routing.change', (event: CustomEvent) => {
    if (event.detail.app.name === appName) {
      router.navigate([event.detail.url.replace('/app/' + appName, '')]);
    }
  });
}

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
    handleRouterUpdate(this.router, 'app1');
  }
}
