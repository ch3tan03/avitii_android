import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service'
import { MustMatch } from '../_helpers/must-match-validator';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    public isOtpSent: boolean;
    loading = false;
    submitted = false;
    returnUrl: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private userService: UserService,
        private alertService: AlertService,
        private appRouterService: AppRouterService,
        private router: Router,
    ) {
        // redirect to home if already logged in
        this.appRouterService.onInitRouteOnHomeIfLoggedin();
    }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            userName: ['', [Validators.required, Validators.email]],
            emailAddress: [''],
            otp: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword'),
            // validate: EmailValidator('emailAddress')
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.forgotPasswordForm.controls; }

    onforgotPasswordSendOtp() {
        this.isOtpSent = false;
        if (!this.isOtpSent) {
            this.submitted = true;
            console.log('inside Submit ' + this.forgotPasswordForm.invalid);
            // stop here if form is invalid
            if (this.forgotPasswordForm.controls.userName.invalid) {
                return;
            }
            this.forgotPasswordForm.get('emailAddress').setValue(this.forgotPasswordForm.get('userName').value);
            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.forgotPasswordForm.value);
            this.userService.resetPasswordSendOtp2user(this.forgotPasswordForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log('data => ', data)
                        if (data && data['success']) {
                            //alert(JSON.stringify( data));
                            this.alertService.success(data['message'], true);
                            this.loading = false;
                            this.isOtpSent = true;
                        } else {
                            //alert(JSON.stringify(data['message']));
                            this.alertService.error(data['message']);
                            this.loading = false;
                            this.isOtpSent = false;
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
                        this.isOtpSent = false;
                    });
        }

    }

    onSubmitResetPasswordOfUser() {
        if (this.isOtpSent) {
            this.submitted = true;
            console.log('inside onSubmitRegisterUser ' + (this.forgotPasswordForm.invalid && this.forgotPasswordForm.controls.password.invalid && this.forgotPasswordForm.controls.confirmPassword.invalid && this.forgotPasswordForm.controls.acceptTerms.invalid && this.forgotPasswordForm.controls.otp.invalid));
            // stop here if form is invalid
            if (this.forgotPasswordForm.controls.password.invalid || this.forgotPasswordForm.controls.confirmPassword.invalid || this.forgotPasswordForm.controls.otp.invalid) {
                return;
            }
            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.forgotPasswordForm.value);
            this.forgotPasswordForm.get('userName').setValue(this.forgotPasswordForm.get('emailAddress').value);
            this.userService.resetPasswordVerifyOtpAndUpdate(this.forgotPasswordForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log('data => ', data)
                        if (data && data['success']) {
                            //alert(JSON.stringify( data));//, {state:{ data} }
                            this.alertService.success('Password reset successfully', true);
                            this.router.navigate(['/login']);
                        } else {
                            //alert(JSON.stringify(data['message']));
                            this.alertService.error(data['message']);
                            this.loading = false;
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
        } else {
            this.alertService.error("Please Verify Email first");
        }
    }
}
