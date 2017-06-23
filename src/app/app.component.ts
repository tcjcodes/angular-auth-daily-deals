import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  // We'll call our root component daily-deals
  selector: 'app-daily-deals',
  template: `
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/dashboard"></a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a routerLink="/deals" routerLinkActive="active">Deals</a>
          </li>
          <li>
            <a routerLink="/special" *ngIf="authService.authenticated" routerLinkActive="active">Special Deals</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a *ngIf="!authService.authenticated" (click)="authService.login()">Log In</a>
          </li>
          <li>
            <a (click)=authService.logout() *ngIf="authService.authenticated">Log Out</a>
          </li>
        </ul>
      </nav>
      <div class="col-sm-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  // We'll add an inline style to properly display the navbar
  styles: ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {

  title = 'Daily Deals';

  constructor(public authService: AuthService) {
  }
}
