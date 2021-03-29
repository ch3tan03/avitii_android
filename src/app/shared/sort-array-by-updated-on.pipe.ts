import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'
@Pipe({
  name: 'sortArrayByUpdatedOn'
})
export class SortArrayByUpdatedOnPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    return _.sortBy(array, [args]);
}

}
