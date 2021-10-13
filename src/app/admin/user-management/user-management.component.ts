import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { AlertService, AuthenticationService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/operators';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Role, AppAccessPermissions } from 'src/app/models/role';
import { Router } from '@angular/router';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { IncomeProofComponent } from 'src/app/shared/income-proof/income-proof.component';
import { UserRestrictionDetailsComponent } from 'src/app/shared/user-restriction-details/user-restriction-details.component';
import { UserService } from 'src/app/services/user.service';
var that;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnDestroy, OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  PaymentTransactionDetailsArray: any = null;
  loading = false;
  Role = Role;
  recordsTotal: number = 0;
  nextPageIndex: number = 0;
  totalPages: number = 0;
  limit4Filtered: number = 0;
  constructor(
    public dialog: MatDialog,
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    public router: Router,
    private elementRef: ElementRef,
    private userService: UserService,
  ) {
    this.getAllUsersWithRequestData();
  }

  getAllUsersWithRequestData(_skip: number = 0, callback: any = null) {
    let _data = {};
    this.socketService.getAllUsersWithRequestData(_data, _skip)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentTransactionDetailsArray = this.utilityService._.uniq(this.utilityService._.union((this.PaymentTransactionDetailsArray || []), data["data"]));
            this.recordsTotal = data['metaData']['totalDocs'] || 0;
            this.nextPageIndex = data['metaData']['nextPage'] || 0;
            this.totalPages = data['metaData']['totalPages'] || 0;
            this.limit4Filtered = data['metaData']['limit'] || 0;
            if (callback) {
              callback({
                recordsTotal: this.recordsTotal || 0,
                recordsFiltered: this.utilityService._.keys(this.PaymentTransactionDetailsArray).length || 0,
                data: [],
              });
            } else {
              this.populateUsersDataInTable();
            }
            //this.rerender();
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
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

  updateUsersVerificationStatus(_userId, _isVerified) {
    this.alertService.success("Please wait while we updating status of user");
    this.socketService.updateUsersVerificationStatus(_userId, _isVerified)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
            usersObjArr[data["data"]["_id"]] = data["data"]
            this.PaymentTransactionDetailsArray = usersObjArr;
            this.populateUsersDataInTable();
            //this.rerender();
            this.alertService.success(data['message']);
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
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

  deleteUserById(_userId) {
    this.alertService.success("Please wait while we deleting user");
    this.socketService.deleteUserById(_userId, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
            delete usersObjArr[_userId];
            this.PaymentTransactionDetailsArray = usersObjArr;
            this.populateUsersDataInTable();
            //this.rerender();
            this.alertService.success(data['message']);
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
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

  usersProfile(userObj) {

    //console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(PublicProfileComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        adminViewT: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        let _userId = result.data._id;
        let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
        delete usersObjArr[_userId];
        usersObjArr[_userId] = result.data;
        this.PaymentTransactionDetailsArray = usersObjArr;
      }
      //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  returnT4CurrentUserIsSAdmin() {
    try {
      if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(AppAccessPermissions.adminAddEdit) > -1) {
        return true;
      }
    } catch (ex) {
    }
    return false;
  }

  returnT4CurrentUserAllowedToShow(currentUserRole) {
    if (this.returnT4CurrentUserIsSAdmin()) {
      return true;
    }
    if (currentUserRole != Role.Admin) {
      return true;
    }
    return false;
  }
  navigate2EditUser(userId) {
    this.router.navigate(['/admin/add-user'], { state: { userId: userId } });
  }

  //#region datatable actions

  ngOnInit(): void {
    this.populateUsersDataInTable();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
      this.elementRef.nativeElement.querySelector('.paginate_button.next')
        .removeEventListener('click', this.paginateButtonNext);
      this.elementRef.nativeElement.querySelector('.paginate_button.last')
        .removeEventListener('click', this.paginateButtonNext);
    }
  }

  populateUsersDataInTable() {
    that = this;
    this.destroyTable();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      /*
            serverSide: true,
            processing: false,
            ajax: (dataTablesParameters: any, callback) => {
              if ((dataTablesParameters.start + dataTablesParameters.length) < that.utilityService._.keys(that.PaymentTransactionDetailsArray).length) {
                //No Action here
          
                callback({
                  recordsTotal: that.recordsTotal || 0,
                  recordsFiltered: that.utilityService._.keys(that.PaymentTransactionDetailsArray).length || 0,
                  data: [],
                });
                
                //that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback);
              } else {
                that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback);
                //that.dtTrigger.next();
                //that.rerender();
            }
      
          },*//*,columns:[{data:"_id"},{data:"firstName"},{data:"lastName"}],*/
/*
      drawCallback: () => {
        if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
          this.elementRef.nativeElement.querySelector('.paginate_button.next')
            .addEventListener('click', this.paginateButtonNext);
          this.elementRef.nativeElement.querySelector('.paginate_button.last')
            .addEventListener('click', this.paginateButtonNext);
        }
      }
      */
    };
    this.dtTrigger.next();
    this.rerender();
  }
  paginateButtonNext() {
    that.getAllUsersWithRequestData((that.nextPageIndex || 1));
  }

  ngAfterViewInit(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
    }
  }

  rerender(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }

  destroyTable(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
      });
    }
  }

  onClick(event): void {
  }

  //#endregion datatable actions
  usersIncomeExpenseDetails(userObj) {

    //console.log('241', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(IncomeProofComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        isOpenedInModel: true,
        adminViewT: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`256 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  usersRestrictionModal(userObj: any, isVerified: boolean) {
    const dialogRef = this.dialog.open(UserRestrictionDetailsComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        adminViewT: true,
        isVerified: isVerified,
        isOpenedInModel: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data && result.data["_id"]) {
        let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
        usersObjArr[result.data["_id"]] = result.data;
        this.PaymentTransactionDetailsArray = usersObjArr;
        this.populateUsersDataInTable();
      }
      //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

}