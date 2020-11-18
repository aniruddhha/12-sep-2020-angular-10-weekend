import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class DataFliterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: string[]): Array<any> {
    if (args[0]) {
      const transformed = []

      value.forEach(mob => {
        if (args[0].toLowerCase() == mob.name.charAt(0).toLowerCase()) {
          transformed.push(mob)
        }
      })
      return transformed;
    }
    return value
  }
}
