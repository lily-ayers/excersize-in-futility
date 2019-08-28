import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNum'
})
export class BigNumPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const suffixes = ['K', 'M', 'B', 'T', 'q', 'Q', 'h', 'H', 'O', 'N', 'D'];

    if (value < 1000) {
      return value.toFixed(args);
    }

    const exponent = Math.floor(Math.log(value) / Math.log(1000));

    return (value / Math.pow(1000, exponent)).toFixed(args) + suffixes[exponent - 1];
  }

}
