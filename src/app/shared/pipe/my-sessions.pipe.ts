import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"
@Pipe({
  name: 'mySessionsFilter'
})
export class MySessionsPipe implements PipeTransform {

  transform(allSessionsData: any[], field: string, valuesArr: string[], checkCreatedByUserId: string = null, checkCreatedByT:boolean=false): any[] {
    if (!allSessionsData) return [];
    if (!valuesArr || valuesArr.length == 0) return allSessionsData;
    return allSessionsData.filter(it => {
      if (checkCreatedByUserId) {
        if (!checkCreatedByT) {
          if (it.createdBy == checkCreatedByUserId) {
            return false;
          }
        } else {
          if (it.createdBy != checkCreatedByUserId) {
            return false;
          }
        }
      }
      let _fieldData = _.get(it, field);
      if (_fieldData) {
        return valuesArr.indexOf(_fieldData.toLowerCase()) != -1
      }
      return false;
    }
    );
  }
}
