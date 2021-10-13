import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {
  public _: any;
  public moment: any;
  constructor() {
    this._ = _;
    this.moment = moment;
  }

  public Countries: Array<string> = ['USA', 'INDIA'];

  public Locations: Array<string> = ['USA', 'INDIA'];

  public ParentLoanTypes: any = {
    "private_loan": { "_id": "private_loan", "name": "Private Loan" },
    "education_loan": { "_id": "education_loan", "name": "Education Loan" },
    "investment_loan": { "_id": "investment_loan", "name": "Investment Loan" },
    "corporate_loan": { "_id": "corporate_loan", "name": "Corporate Loan" },
  };

  public LoanAmountMaxTypes: any = {
    "new_lender": { "_id": "new_lender", "name": "New Lender (maximum loan per user-> 3000)", "amount": 3000 },
    "good_lender": { "_id": "good_lender", "name": "Good Lender (maximum loan per user-> 5000)", "amount": 5000 },
    "expert_lender": { "_id": "expert_lender", "name": "Expert Lender (maximum loan per user-> 10000)", "amount": 10000 },
    "super_lender": { "_id": "super_lender", "name": "Super Lender (maximum loan per user-> 25000)", "amount": 25000 },
    "proff_lender": { "_id": "proff_lender", "name": "Proff. Lender (maximum loan per user-> 50000)", "amount": 50000 },
  };

  public LoanBorrowersTypes: any = {
    "new_borrower": { "_id": "new_borrower", "name": "New Borrower" },
    "risky_borrower": { "_id": "risky_borrower", "name": "Risky Borrower" },
    "between_borrower": { "_id": "between_borrower", "name": "Between Borrower" },
    "good_borrower": { "_id": "good_borrower", "name": "Good Borrower" },
    "super_borrower": { "_id": "super_borrower", "name": "Super Borrower" },
  };

  public LoanRepaymentTypes: any = {
    "bank": { "_id": "bank", "name": "Bank" },
    "revolut": { "_id": "revolut", "name": "Revolut" },
    "skrill": { "_id": "skrill", "name": "Skrill" },
    "paypal": { "_id": "paypal", "name": "Paypal" },
    "cash": { "_id": "cash", "name": "Cash (local only)" },
  };

  public AppPlanTypes: any = {
    "trial_plan": { "_id": "trial_plan", "name": "Trial Plan", "amount": 0, 'expiryInMonth': 2 },
    "paid_plan4lender": { "_id": "paid_plan4lender", "name": "Paid Plan", "amount": 25, 'expiryInMonth': 1 },
    "paid_plan4borrower": { "_id": "paid_plan4borrower", "name": "Paid Plan", "amount": 5, 'expiryInMonth': 1 },
  };

  public InsuranceTypes: any = {
    "20_5000": { "_id": "20_5000", "name": "20% of amounts lent up to 5000 ddk" },
  };

  returnStringWithReplacing_(_string) {
    if (_string) {
      return _string.replace(/_/g, ' ');
    }
    return _string;
  }

  returnDateWithAddingMonths(date, i: number) {
    //return moment(date).add(i,"month");
    return moment(date).add(i, "month").startOf('month');
  }

  returnEpochDateWithAddingMonths(date, i: number) {
    //return moment(date).add(i,"month");
    let epochDate: Number = null;
    epochDate = moment(date).add(i, "month").valueOf();
    return epochDate;
  }

  counter(i: number) {
    return new Array(i);
  }

  createString(letter: string, length: number) {
    let word = '';
    letter = (letter ? letter : '');
    for (let i = 0; i < length; i++) {
      word = word + '*';
    }
    return word;
  }

  returnTIfNowIsInBetweenSupplied(_now1, _now2) {
    let _calculated_now1 = moment(_now1).add(-30, 'minute');
    let _calculated_now2 = moment(_now2);
    let _calculated_now = moment(_.now());
    let _isValidDateT = false;
    if (_now1 && _now2) {
      _isValidDateT = _calculated_now.isBetween(_calculated_now1, _calculated_now2);
    }
    if (_isValidDateT) {
      return 1;
    } else {
      if (_calculated_now.isBefore(_calculated_now2)) {
        return 2;
      } else {
        return 0;
      }
    }
  }
  randomString(len, charSet) {
    charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    charSet = charSet.toString();
    var randomString = "";
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  returnRoundedNumber(num) {
    return Math.round(num * 100 + Number.EPSILON) / 100
  }

  _returnT_4undefined(_obj, _ignore_bitT) {
    if ((typeof _obj == 'undefined' || _obj == null || _obj == '' || (typeof _obj == 'string' && _obj != '' && _obj.trim() == '') || _obj == "undefined" || _obj == "null" || _obj == 'NaN' || _.isUndefined(_obj) || _.isNaN(_obj) || _.isNull(_obj) || _obj == [] || (typeof _obj === 'object' && Object.keys(_obj).length == 0)) && ((!_ignore_bitT) || (_ignore_bitT && _obj !== false && _obj !== 0))) {
      return true;
    } else {
      return false;
    }
  }

  returnLoanType(loanType) {
    let _returnLoanType = null;
    try {
      if (loanType) {
        _returnLoanType = this.ParentLoanTypes[loanType].name
      }
    } catch (ex) {
    }
    return _returnLoanType;
  }

  returnLoanRepaymentType(loanRepaymentType, LoanObj) {
    if (LoanObj) {
      let _returnLoanRepaymentType = -1;
      try {
        if (loanRepaymentType) {
          _returnLoanRepaymentType = LoanObj.loanRepaymentType.indexOf(loanRepaymentType)
        } else {
          _returnLoanRepaymentType = -1;
        }
      } catch (ex) {
      }
      return _returnLoanRepaymentType;
    }
  }

  fnCalculateMonthlyAmountForEMI(loanAmount, loanTenureInMonths, loanInterestRate) {
    //this._calculatedMonthlyAmountForEMI = loanAmount * loanInterestRate * (((1 + loanInterestRate) ^ loanTenureInMonths) / ((1 + loanInterestRate) ^ (loanTenureInMonths - 1)));

    let _calculatedMonthlyAmountForEMI = (loanAmount + ((loanAmount * loanInterestRate * loanTenureInMonths) / 100)) / loanTenureInMonths;

    _calculatedMonthlyAmountForEMI = this.returnRoundedNumber(_calculatedMonthlyAmountForEMI);

    return _calculatedMonthlyAmountForEMI;
  }

}