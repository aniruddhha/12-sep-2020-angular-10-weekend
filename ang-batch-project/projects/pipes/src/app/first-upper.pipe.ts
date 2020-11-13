import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fu'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const words = value.split(' ')
    // console.log(words)

    let transFormed = ''

    words.forEach((word, ind) => {
      const uFc = word.charAt(0).toUpperCase() // uppering oth character

      const upWrd = `${uFc}${word.substr(1)} ` // creating sub string excluding first character 
      console.log(`${uFc} --> ${upWrd}`)
      transFormed += upWrd // creating sentance 
    })

    return transFormed;
  }
}
