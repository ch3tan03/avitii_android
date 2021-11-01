import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { AlertService, AuthenticationService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    paramobj: any = null;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private appRouterService: AppRouterService
    ) {
        this.paramobj = history.state;
        // redirect to home if already logged in
        this.appRouterService.onInitRouteOnHomeIfLoggedin();
    }

    ngOnInit() {
        /*      
               this.route.paramMap
               .pipe(map(() => window.history.state))
               .subscribe(state => {
              
             });
            */
        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.userName.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (!data['isVerified']) {
                        data['isRegisteredAllowed2EditProfile'] = true;
                        this.appRouterService.appRouterRoleWise(data, 'profile');
                    } else {
                        if (this.paramobj && this.paramobj.returnUrl) {
                            this.appRouterService.appRouteToPath(this.paramobj.returnUrl, this.paramobj);
                            return;
                        }
                        this.appRouterService.appRouter(data);
                    }
                },
                error => {
                    let errorMsg2show = "";
                    try {
                        if (error && error.error && error.error.message) {
                            errorMsg2show = error.error.message;
                        } else if (error && error.message) {
                            errorMsg2show = error.message;
                        } else {
                            errorMsg2show = error;
                        }
                    } catch (ex) { }
                    this.alertService.error(errorMsg2show);
                    this.loading = false;
                });
    }
}
