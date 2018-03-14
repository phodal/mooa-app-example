import {Component} from '@angular/core';
import {mooaPlatform} from 'mooa';

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
}
