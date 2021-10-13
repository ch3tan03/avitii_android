import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { AlertService } from 'src/app/services';
import { SocketioService } from 'src/app/socketio.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TransactionActionType } from 'src/app/models/role';

@Component({
  selector: 'app-payment-transactions',
  templateUrl: './payment-transactions.component.html',
  styleUrls: ['./payment-transactions.component.css']
})
export class PaymentTransactionsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  PaymentTransactionDetailsArray: any = null;
  loading = false;
  transactionActionType = null;
  TransactionActionType=TransactionActionType;
  constructor(
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    private elementRef: ElementRef
  ) {
    let paramobj = history.state;
    if (paramobj) {
      this.transactionActionType = paramobj['transactionActionType'];
      delete history.state['transactionActionType'];
    }
    if (!this.transactionActionType) {
      this.transactionActionType = [TransactionActionType.plan_purchase];
    }
    let _data = {
      transactionActionType: this.transactionActionType
    };
    this.socketService.getAllPaymentTransactionDetails(_data)
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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      drawCallback: () => {
        this.elementRef.nativeElement.querySelector('.paginate_button.next')
          .addEventListener('click', this.onClick.bind(this));
      }
    };
    this.dtTrigger.next();
    this.rerender();
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

  onClick(event): void {
  }

  //#endregion datatable actions

}
