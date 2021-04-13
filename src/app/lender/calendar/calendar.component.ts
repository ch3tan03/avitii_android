import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { first } from 'rxjs/internal/operators/first';
import { Role, SessionStatus, User } from 'src/app/models';
import { AuthenticationService, AlertService, UserService } from 'src/app/services';
import { ContactService } from 'src/app/services/contact.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import { ModalApplySession } from '../lender.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  loading: Boolean = false;
  SessionStatus = SessionStatus;
  SessionStatusTypeFilter: string[] = [];
  checkCreatedByUserId: string = '';
  checkCreatedByT: Boolean = false;
  currentUser: User;
  allSessionsData: any;
  allSessionsCount: any;

  constructor(
    public authenticationService: AuthenticationService,
    private socketService: SocketioService,
    public dialog: MatDialog,
    public contactService: ContactService,
    private utilityService: UtilityService,
    private alertService: AlertService,
    public userService: UserService,
    public router: Router,
    private sessionsService: SessionsService,
  ) {
    this.sessionsService.getSessionAllByLenderId(this.authenticationService.currentUserValue._id, null, null, SessionStatus.Accepted, true, null)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByLenders"), 1), 'borrowerId')));
            //this.alertService.success(data['message'], true);
            this.bindDataToCalendrUI(this.allSessionsData);
            this.loading = false;
            //this.element_btn_click_addSession_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });

    this.sessionsService.getUpdatesForSessionAllByLenderId()
      .subscribe(
        data => {
          if (data && data['success']) {
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            for (let _items in data['data']) {
              let _currentObj = data['data'][_items];
              _keyPairedMapObj[_currentObj._id] = _currentObj
            }
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.bindDataToCalendrUI(this.allSessionsData);
            this.loading = false;
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
        });

  }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEeventClick.bind(this),
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg) {
    arg.jsEvent.preventDefault();
    //alert('date click! ' + arg.dateStr)
  }
  handleEeventClick(arg) {
    arg.jsEvent.preventDefault();
    //alert('event click! ' + arg.event.id);
    let _sessionId = arg.event.id;
    let _sessionObj = this.utilityService._.filter(this.allSessionsData, { '_id': _sessionId })[0];
    
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj =this.utilityService._.cloneDeep(_sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByBorrowers;
        break;
      case Role.Lender:
        _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByLenders;
        break;
      default:
        _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
        break;
    }
    
    let _sessionApplyObj = this.utilityService._.first(_proccessedSessionObj.sessionAppliedByBorrowers);
    
    let _borrowerId = null;
    if (_sessionApplyObj) {
      _borrowerId = _sessionApplyObj.borrowerId
    }

    this.showDataOfLoanObjInModal(_sessionObj, _sessionApplyObj, _borrowerId);
  }

  bindDataToCalendrUI(_allSessionsData) {
    let _all_installments = [];
    for (let inedexOuter in _allSessionsData) {

      let _LoanObj = {
        _id: null,
        loanTenureInMonths: null,
        loanStartDateTime: null,
        calculatedMonthlyAmountForEMI: null,
        loanType: null
      };
      _LoanObj = _allSessionsData[inedexOuter];

      for (let index = 0; index < _LoanObj.loanTenureInMonths; index++) {
        let installment = {
          loanStartDateTime: null,
          calculatedMonthlyAmountForEMI: null,
          title: null,
          date: null,
          description: null,
          id: null,
        };

        installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("YYYY-MM-DD");
        installment.calculatedMonthlyAmountForEMI = _LoanObj.calculatedMonthlyAmountForEMI;

        installment.date = installment.loanStartDateTime;
        installment.id = _LoanObj._id;
        installment.description = '' + installment.calculatedMonthlyAmountForEMI;
        let _installmentString = '' + (index + 1).toString();
        installment.title = _installmentString + '. ' + installment.calculatedMonthlyAmountForEMI + '-' + this.utilityService.returnLoanType(_LoanObj.loanType);
        _all_installments.push(installment);
      }

    }


    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this), // bind is important!
      eventClick: this.handleEeventClick.bind(this),
      events: _all_installments
    };
  }

  showDataOfLoanObjInModal(sessionObj, sessionApply, borrowerId) {
    const dialogRef = this.dialog.open(ModalApplySession, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      data: {
        sessionObj: sessionObj,
        borrowerId: this.authenticationService.currentUserValue._id
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`25 :: co :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

}
