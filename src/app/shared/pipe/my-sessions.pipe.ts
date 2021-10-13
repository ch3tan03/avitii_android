import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"
@Pipe({
  name: 'mySessionsFilter'
})
export class MySessionsPipe implements PipeTransform {

  transform(allSessionsData: any[], field: string, valuesArr: string[], checkCreatedByUserId: string = null, checkCreatedByT: boolean = false, sendMasterDataBackIfChildMissingT: boolean = false,): any[] {
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
      let _fieldData = null;
      let _splittedArr = field.replace('[0]', '').split('.');
      if (field && _splittedArr.length == 2) {
        let master_objAttr = field.replace('[0]', '').split('.')[0];

        let child_objAttr = field.replace('[0]', '').split('.')[1]
        for (let index in it[master_objAttr]) {
          let _obj = it[master_objAttr][index];
          if (_obj) {
            _fieldData = _obj[child_objAttr];

            if (_fieldData) {
              return valuesArr.indexOf(_fieldData.toLowerCase()) != -1
            }
          }
        }

        if (sendMasterDataBackIfChildMissingT) {
          if (valuesArr.indexOf('pending') > -1) {
            return true;
          }
        }
        
      } else {
        _fieldData = _.get(it, field);
        if (_fieldData) {
          return valuesArr.indexOf(_fieldData.toLowerCase()) != -1
        }
      }
      return false;
    }
    );
  }
}
