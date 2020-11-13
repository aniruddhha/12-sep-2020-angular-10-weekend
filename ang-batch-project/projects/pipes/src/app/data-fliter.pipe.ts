import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class DataFliterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: string[]): Array<any> {
    const transformed = []

    value.forEach(mob => {
      if (args[0] == mob.charAt(0).toLowerCase()) {
        transformed.push(mob)
      }
    })
    return transformed;
  }
}
