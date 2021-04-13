import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from 'src/app/services';
import { Role, AppDocumentType, UserType } from 'src/app/models';
import { HearAboutUs } from '../../models/hearAboutUs';
import { MustMatch } from '../_helpers/must-match-validator';
import { AppRouterService } from 'src/app/services/app-router.service'
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    private sub: any;
    private isOtpSent: boolean;
    private _role: string;
    loading = false;
    submitted = false;
    Role = Role;
    element_btn_click_reg_basic_details: HTMLElement;
    element_btn_click_reg_email_verification: HTMLElement;
    Roles = Object.keys(Role);
    HearAboutUs = Object.keys(HearAboutUs);
    hearAboutUslist = ["Facebook", "Google", "Instagram", "YouTube", "Friend"];
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private utilityService: UtilityService,
        private alertService: AlertService,
        private appRouterService: AppRouterService,
        private route: ActivatedRoute,
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter(this.authenticationService.currentUserValue);
        }
    }

    ngOnInit() {
        this.element_btn_click_reg_basic_details = document.getElementById('btn_click_reg_basic_details') as HTMLElement;
        this.element_btn_click_reg_email_verification = document.getElementById('btn_click_reg_email_verification') as HTMLElement;
        this.registerForm = this.formBuilder.group({
            role: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: [''],
            emailAddress: ['', Validators.required],
            confirmEmailAddress: [''],
            otp: [''],
            userType: [''],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptnewUpdates: [''],
            acceptTerms: [false, Validators.requiredTrue],
            birthDate: [''],
            nationality: [''],
            residence: [''],
            birthPlace: [''],
            promoCode: [''],
            mobileNo: [''],
            hearAboutUs: ['', Validators.required],
            app_doc_type: [AppDocumentType.user_profile]
        }, {
            validator: MustMatch('password', 'confirmPassword'),
            // validate: EmailValidator('emailAddress')
        });
        this._role = Role.Lender;
        this.sub = this.route.queryParams.subscribe(params => {
            let _data = params['id'];
            let _id = params["k"];
            if (_id) {
                //#region user came here to complete registration, login and send to profile page
                this.authenticationService.autologin4registration(_id)
                    .pipe(first())
                    .subscribe(
                        data => {
                            data['isRegisteredAllowed2EditProfile'] = true;
                            this.appRouterService.appRouterRoleWise(data, 'profile');
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
                //#endregion user came here to complete registration, login and send to profile page
            }
            switch (_data) {
                case "ct":
                    this._role = Role.Borrower;
                    break;
                case "cr":
                    this._role = Role.Lender;
                    break;
                case 'ad':
                    this._role = Role.Admin;
                    break;
                default:
                    this._role = Role.Lender;
                    break;
            }
            this.onClickRoleChange(this._role);
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onClickRoleChange(_role) {
        if (_role) {
            this.registerForm.get('role').setValue(_role);
        }
    }

    onVerifySendOtp() {
        this.isOtpSent = false;
        if (!this.isOtpSent) {
            this.submitted = true;
            console.log('inside Submit ' + this.registerForm.invalid);
            // stop here if form is invalid
            if (this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid) {
                return;
            }
            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.registerForm.value);
            this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            this.userService.sendOtp2user(this.registerForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log('data => ', data)
                        if (data && data['success']) {
                            //alert(JSON.stringify( data));
                            this.alertService.success(data['message'], true);
                            this.loading = false;
                            this.isOtpSent = true;
                            this.element_btn_click_reg_email_verification.click();
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
    onSubmitRegisterUser() {
        if (this.isOtpSent) {
            this.submitted = true;
            console.log('inside onSubmitRegisterUser ' + (this.registerForm.invalid && this.registerForm.controls.password.invalid && this.registerForm.controls.confirmPassword.invalid && this.registerForm.controls.acceptTerms.invalid && this.registerForm.controls.otp.invalid));
            // stop here if form is invalid
            if (this.registerForm.controls.password.invalid || this.registerForm.controls.confirmPassword.invalid || this.registerForm.controls.acceptTerms.invalid || this.registerForm.controls.otp.invalid) {
                return;
            }
            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.registerForm.value);
            this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            this.userService.verifyOtpAndRegister(this.registerForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log('data => ', data)
                        if (data && data['success']) {
                            //alert(JSON.stringify( data));
                            this.alertService.success('Registration successful', true);
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

    onSubmitVerifyRegisterUser() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        this.loading = true;
        console.log("Reg Data => ", this.registerForm.value);
        this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
        this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
        let _userType = null;

        switch (this.registerForm.get('role').value) {
            case Role.Lender:
                this.registerForm.get('userType').setValue(UserType.new_lender);
                break;
            case Role.Borrower:
                this.registerForm.get('userType').setValue(UserType.new_borrower);
                break;
        }



        this.userService.verifyUserAndRegister(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));
                        this.alertService.success('Registration initiated. Sent Verification link on email, please click on link to complete registration proccess.', true);
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
    }
}
//https://avittii.herokuapp.com/#/register?k=d54db449-9b76-47cd-8441-7f08e1685fc1
//http://localhost:4200/#/register?k=d54db449-9b76-47cd-8441-7f08e1685fc1