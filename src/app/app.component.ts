import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { TranslateService } from '@ngx-translate/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private translateService: TranslateService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.translateService.setDefaultLang('en');
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    useLanguage(language: string) {
        this.translateService.use(language);
    }
}