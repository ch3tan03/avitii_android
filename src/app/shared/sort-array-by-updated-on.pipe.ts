import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'
@Pipe({
  name: 'sortArrayByUpdatedOn'
})
export class SortArrayByUpdatedOnPipe implements PipeTransform {

  transform(array: Array<any>, key: any, descTascF: boolean): any {
    if (descTascF) {
      return _.reverse(_.sortBy(array, function (value) { return new Date(value[key]); }));
    } else {
      return _.sortBy(array, function (value) { return new Date(value[key]); });
    }
    //return _.sortBy(array, [args]);
    /*_.sortBy(array, function(value) {return new Date(value);}); */
  }

}
