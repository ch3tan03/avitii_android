import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/components/_helpers/must-match-validator';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})

export class UpdatePasswordComponent implements OnInit {
  profileUpdatePasswordForm: FormGroup;
  submitted: Boolean = false;
  loading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService
  ) {
    if (!this.authenticationService.currentUserValue) {
      this.appRouterService.appRouter('');
    }
    this.showEditingForm(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
  }

  onUpdatePasswordSubmit() {

    this.submitted = true;
    if (this.profileUpdatePasswordForm.invalid) {
      this.alertService.error("Please enter stronger password and should have atleast 6 characters.");
      return;
    }

    this.userService.resetExistingUsersPasswordByUserId(this.profileUpdatePasswordForm.value._id, this.profileUpdatePasswordForm.value.userName, this.profileUpdatePasswordForm.value.password, this.profileUpdatePasswordForm.value.password2update, this.profileUpdatePasswordForm.value.role)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.submitted = false;
            this.showEditingForm(this.authenticationService.currentUserValue);
            this.alertService.success('Password Updated successfully', true);
          } else {
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

  get f() { return this.profileUpdatePasswordForm.controls; }

  showEditingForm(_userObj) {
    this.profileUpdatePasswordForm = this.formBuilder.group({
      _id: [_userObj._id || '', Validators.required],
      role: [_userObj.role || '', Validators.required],
      userName: [_userObj.userName || '', Validators.required],
      password: [_userObj.password || '', Validators.required],
      password2update: [_userObj.password2update || '', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [_userObj.confirmPassword || '', Validators.required],
    }, {
      validator: MustMatch('password2update', 'confirmPassword'),
    });

  }

}
