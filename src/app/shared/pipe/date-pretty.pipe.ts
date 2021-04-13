import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'datePretty'
})

export class DatePrettyPipe implements PipeTransform {
  transform(date2check: any, currentDate: any = null): any {
    currentDate = (currentDate ? currentDate : Date.now());
    if (date2check) {
      return moment(new Date(date2check)).from(new Date(currentDate));
    }
    return date2check;
  }

}