import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"
@Pipe({
  name: 'dataArrayFilter'
})
export class DataArrayFilterPipe implements PipeTransform {
  transform(allDataArr: any[], field: string, value: string): any[] {

    if (!allDataArr) return [];
    if (!value || value.length == 0) return allDataArr;
    return allDataArr.filter(it => {
      let _fieldData = _.get(it, field);
      if (_fieldData) {
        return _fieldData.toLowerCase().indexOf(value.toLowerCase()) != -1
      }
      return false;
    }
    );
  }
}
