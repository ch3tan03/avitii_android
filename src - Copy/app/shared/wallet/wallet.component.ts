import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Role, TransactionActionType } from 'src/app/models';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { first } from 'rxjs/operators';
import { PaymentComponent } from 'src/app/shared/payment/payment.component'
import { IPayPalConfig } from 'ngx-paypal';
import { PaymentService } from 'src/app/services/payment.service';
import * as _ from 'lodash';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { Funds } from 'src/app/models/funds';
import { User } from 'src/app/models';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})


export class WalletComponent implements OnInit {
  addFundsForm: FormGroup;
  loading = false;
  submitted = false;
  currentFunds: Funds;
  totalFund4currentUser: number;
  allFunds: Funds[] = [];
  currentUser: User;
  public payPalConfig?: IPayPalConfig;
  constructor(public utilityService: UtilityService, public payment: PaymentService, private formBuilder: FormBuilder, public addFundsService: AddFundsService, private authenticationService: AuthenticationService, private alertService: AlertService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentFunds = new Funds();
  }

  ngOnInit() {
    this.addFundsForm = this.formBuilder.group({
      amount: ['', Validators.required]
    });
    this.totalFund4currentUser = 0;
    this.loadAllFunds();

  }
  get f() { return this.addFundsForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addFundsForm.invalid) {
      return;
    }
    this.currentFunds.amount = Number(this.f.amount.value);
    this.currentFunds.created_by = this.currentUser._id;
    let purchaseUnits = [
      {
        custom_id :"",
        amount: {
          currency_code: 'USD',
          value: this.currentFunds.amount,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: this.currentFunds.amount
            }
          }
        },
        items: [
          {
						description :'Funds Adding in Wallet',
						name: TransactionActionType.funds_add,
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: this.currentFunds.amount,
            },
          }
        ]
      }
    ];
      this.addFundsService.checkStatusOfNewFundsAdded().pipe(first()).subscribe(_obj => {
        this.loading = false;
        this.alertService.success('Funds Added');
        this.f.amount.setValue('');
        this.loadAllFunds();
        this.payPalConfig=null;
        this.addFundsService.getFundsCountForRequestedUser(this.currentUser._id);
      });
    this.payPalConfig = this.payment.initConfig(purchaseUnits, TransactionActionType.funds_add, this.currentUser._id);

    /*
        this.addFundsService.funds_add_new_funds(this.currentFunds).pipe(first()).subscribe(_obj => {
          this.loading = false;
          this.alertService.success('Funds Added');
          this.f.amount.setValue('');
          this.loadAllFunds();
        });
        */

  }
  loadAllFunds() {
    //this.addFundsService.funds_getall_funds(this.currentUser.id);
    /*this.addFundsService.allFunds.subscribe((x)=>{
      this.allFunds=x;
    });
    this.totalFund4currentUser=0;
    for(var item in this.allFunds){
        this.totalFund4currentUser=this.totalFund4currentUser+ this.allFunds[item].amount;
    }
    */
    this.addFundsService.funds_getall_funds(this.currentUser._id).pipe(first()).subscribe(funds => {
      this.totalFund4currentUser = 0;
      this.allFunds = funds;

      for (var item in this.allFunds) {
        this.totalFund4currentUser = this.totalFund4currentUser + this.allFunds[item].amount;
      }
    });
  }
  deleteFund(id: string) {
    this.addFundsService.funds_delete(id, this.currentUser._id).pipe(first()).subscribe(() => {
      this.loadAllFunds();
    });
  }
}



