import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private translate: TranslateService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
    translate.setDefaultLang('en');
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
