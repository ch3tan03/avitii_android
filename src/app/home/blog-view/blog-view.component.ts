import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  blogsData: any = {};
  loading: boolean = false;
  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private route: ActivatedRoute,
    private socketService: SocketioService,
    private utilityService: UtilityService,
  ) {
    this.route.queryParams.subscribe(params => {
      let documentId = params['id'];
      this.socketService.setupSocketConnectionIfNotExists(this.utilityService.randomString(30, null));
      setTimeout(()=>{
        this.fetchBlogById(documentId);
      },3000);
    });
  }

  ngOnInit(): void {
    let documentId = this.route.snapshot.params.id;
    this.socketService.setupSocketConnectionIfNotExists(this.utilityService.randomString(30, null));
    setTimeout(()=>{
      this.fetchBlogById(documentId);
    },3000);
  }

  fetchBlogById(documentId) {
    if (!documentId) {
      return;
    }
    this.userService.getBlogsById(documentId)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.blogsData = data["data"];
            //this.alertService.success(data['message'], true);
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

}
