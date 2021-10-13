import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { Role } from 'src/app/models';
import { AuthenticationService, UserService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilterObj: any = {
    country: null,
    pincode: null,
    userType: null,
    loanAmountMin: null,
    loanAmountMax: null,
    isRKIRegistered: null,
  };
  Role = Role;
  allUserLevelsDataLenders: any = [];
  allUserLevelsDataBorrower: any = [];
  countrylist: any = [];
  constructor(
    public dialogRef: MatDialogRef<SearchComponent>,
    private userService: UserService,
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      if (data.searchFilterObj) {
        this.searchFilterObj = data.searchFilterObj;
      }

      if (data.searchFilterObj && this.searchFilterObj['createdByUserObj.country']) {
        this.searchFilterObj.country = this.searchFilterObj['createdByUserObj.country'];
        delete this.searchFilterObj['createdByUserObj.country'];
      }
      if (this.searchFilterObj && this.utilityService._.isBoolean(this.searchFilterObj['createdByUserObj.isRKIRegistered'])) {
        this.searchFilterObj.isRKIRegistered = this.searchFilterObj['createdByUserObj.isRKIRegistered'];
        delete this.searchFilterObj['createdByUserObj.isRKIRegistered'];
      } else {
        this.searchFilterObj.isRKIRegistered = null;
      }
    }
    this.countrylist = this.utilityService.returnCountryNames();
    this.fetchAllUserLevelsByUserId();
  }

  fetchAllUserLevelsByUserId() {
    this.userService.getUserLevelsAll(null)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.allUserLevelsDataLenders = this.utilityService._.filter(data["data"], { 'role': Role.Lender });
            this.allUserLevelsDataBorrower = this.utilityService._.filter(data["data"], { 'role': Role.Borrower });
            //this.alertService.success(data['message'], true);
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

        });
  }

  ngOnInit(): void {
  }

  closeDialog(applyFilter: boolean = false) {

    if (this.searchFilterObj && this.searchFilterObj.country) {
      this.searchFilterObj['createdByUserObj.country'] = this.searchFilterObj.country;
      delete this.searchFilterObj.country;
    }
    if (this.searchFilterObj && this.utilityService._.isBoolean(this.searchFilterObj.isRKIRegistered)) {
      this.searchFilterObj['createdByUserObj.isRKIRegistered'] = !!this.searchFilterObj.isRKIRegistered;
      delete this.searchFilterObj.isRKIRegistered;
    }

    this.dialogRef.close({ event: 'close', data: (applyFilter ? this.searchFilterObj : null) });
  }

}
