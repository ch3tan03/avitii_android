import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any; 

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.css']
})
export class SessionViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $(".vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link").click(function() {
        $(this).parent().prevAll().children('.vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link').addClass('checked-steps');

        $(this).parent().nextAll().children('.vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link').removeClass('checked-steps');

        $(this).removeClass('checked-steps');
        $(this).parent().removeClass('complete-step');
        $(this).parent().nextAll().removeClass('complete-step');

        $(".horizontal-tabs-steps .nav-link.checked-steps, .vertical-tabs-steps .nav-link.checked-steps").parent().addClass('complete-step');
      });
    });
  }

}
