import { Component, ElementRef, Inject, Input, OnInit, Optional, ViewChild, OnChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import { UserRestrictionDetailsComponent } from '../user-restriction-details/user-restriction-details.component';


@Component({
  selector: 'app-user-restriction-list',
  templateUrl: './user-restriction-list.component.html',
  styleUrls: ['./user-restriction-list.component.css']
})
export class UserRestrictionListComponent implements OnInit, OnChanges {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  PaymentTransactionDetailsArray: any = null;
  loading = false;
  @Input() userObj: any = null;
  isOpenedInModel: boolean = false;
  adminViewT: boolean = false;

  constructor(
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    private appRouterService: AppRouterService,
    private elementRef: ElementRef,
    @Optional() public dialogRef: MatDialogRef<UserRestrictionDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private userService: UserService,
  ) {
    if (data && data.isOpenedInModel) {
      this.isOpenedInModel = true;
      this.userObj = data.userObj;
      this.adminViewT = !!data.adminViewT;
    } else {
      if (!this.userObj) {
        this.userObj = this.authenticationService.currentUserValue;
      }
    }
    // redirect to home if already logged in
    if (!this.userObj || !this.userObj._id) {
      if (this.isOpenedInModel) {
        this.closeDialog();
      } else {
        this.appRouterService.appRouter('');
      }
      return;
    }
    this.getUserRestrictionDetailsByUserId();
  }

  getUserRestrictionDetailsByUserId() {
    let _data = {
      userId: this.userObj._id
    };
    this.userService.getUserRestrictionDetailsByUserId(this.userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentTransactionDetailsArray = data["data"];
            this.populateUsersDataInTable();
            //this.rerender();
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          this.PaymentTransactionDetailsArray = [];
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

  ngOnChanges() {
    // create header using child_id
    this.getUserRestrictionDetailsByUserId();
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
        .removeEventListener('click');
    }
  }

  populateUsersDataInTable() {
    this.destroyTable();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      drawCallback: () => {
        this.elementRef.nativeElement.querySelector('.paginate_button.next')
          .addEventListener('click', this.onClick.bind(this));
      }
    };
    this.dtTrigger.next();
    //this.rerender();
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
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: true });
  }

}
