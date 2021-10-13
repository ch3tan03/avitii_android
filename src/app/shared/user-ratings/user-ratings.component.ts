import { Component, OnInit } from '@angular/core';
import { AppRouterService } from 'src/app/services/app-router.service';
import { SocketioService } from 'src/app/socketio.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services';

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.component.html',
  styleUrls: ['./user-ratings.component.css']
})
export class UserRatingsComponent implements OnInit {
  createdBy: any;
  userId: any;
  loanId: any;
  currentUsersRating: number = 0;
  currentUsersReview: string = '';
  isRecommonded: boolean = false;
  submitted: boolean = false;
  alreadyRatedUser: boolean = false;
  loading: boolean;
  userObj: any = {};
  existingRatingObj: any = {};
  constructor(private appRouterService: AppRouterService, private socketService: SocketioService, private alertService: AlertService,) {
    let paramobj = history.state;
    if (paramobj) {
      this.createdBy = paramobj['createdBy'];
      this.userId = paramobj['userId'];
      this.loanId = paramobj['loanId'];
      this.userObj = paramobj['userObj'];

      delete history.state['createdBy'];
      delete history.state['userId'];
      delete history.state['loanId'];
      delete history.state['userObj'];
      if (!this.createdBy || !this.userId) {
        this.navigateOnHome();
      }
      this.getRatingReviewsByLoanIdUserId();
    }
    if (!this.userObj) {
      this.userObj = {};
    }
  }

  submitRatingReviews() {
    this.submitted = true;
    if (!this.currentUsersRating || !this.currentUsersReview) {
      this.alertService.error("Please Add Reviews..");
      return;
    }
    let _obj2Save = {
      userId: this.userId,
      loanId: this.loanId || null,
      createdBy: this.createdBy,
      rating: this.currentUsersRating,
      comment: this.currentUsersReview,
      isRecommonded: this.isRecommonded
    };
    this.socketService.addNewRatingReview(_obj2Save)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            this.alertService.success(data['message'], true);
            this.loading = false;
            this.navigateOnHome();
            this.submitted = false;
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

  navigateOnHome() {
    this.appRouterService.appRouter(null);
  }

  ngOnInit(): void {
  }

  updateRating(rating: number) {
    if (!this.alreadyRatedUser) {
      this.currentUsersRating = rating;
    }
  }
  onRatingClicked(message) {
    
  }

  getRatingReviewsByLoanIdUserId() {
    if (this.userId && this.loanId && this.createdBy) {
      let _obj2Save = {
        userId: this.userId,
        loanId: this.loanId,
        createdBy: this.createdBy
      };
      this.socketService.getByLoanIdRatingReviewe(_obj2Save)
        .pipe(first())
        .subscribe(
          data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
              if (data['data']) {
                this.existingRatingObj = data['data'][0];
                if (this.existingRatingObj) {
                  this.currentUsersRating = this.existingRatingObj.rating;
                  this.currentUsersReview = this.existingRatingObj.comment;
                  this.isRecommonded = this.existingRatingObj.isRecommonded;
                  this.alreadyRatedUser = true;
                }
              } else {
              }
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
  }
}
