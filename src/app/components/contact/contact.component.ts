import { Component, OnInit } from '@angular/core';
import { UserService, AlertService } from 'src/app/services';
import { first } from 'rxjs/internal/operators/first';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading: boolean;
  contactUsUsersData: Object = {};
  contactUsForm: FormGroup;
  submitted = false;
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactUsForm.controls; }

  sendMailForContactUs() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactUsForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.sendMailForContactUs(this.contactUsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.alertService.success(data['message'], true);
            this.loading = false;
            this.submitted = false;
            this.router.navigate(['/']);
          } else {
            //alert(JSON.stringify(data['message']));
            this.alertService.error(data['message'], true);
            this.loading = false;
            this.submitted = false;
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
