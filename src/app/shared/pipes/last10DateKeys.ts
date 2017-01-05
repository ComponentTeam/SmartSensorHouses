import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'last10DateKeys' })
export class Last10DateKeysPipe implements PipeTransform {
  transform(dateValues) {
    let keys: any = [];
    for (let key in dateValues) {
      let parsedDate = Date.parse(key);
      keys.push({ date: parsedDate, value: dateValues[key] });
    }

    keys.sort(this.compareByDate);
    if (keys.length > 10){
      return keys.slice(keys.length - 10);
    } else{
      return keys;
    }
  }

  compareByDate(a, b) {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);

    if (aDate < bDate) {
      return -1;
    }

    if (aDate > bDate) {
      return 1;
    }

    return 0;
  }
}