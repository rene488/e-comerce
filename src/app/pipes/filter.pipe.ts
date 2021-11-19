import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrangement: any[], text: string): any[] {

    if (text === '' ) {
      return arrangement;
    }

    text = text.toLowerCase();
    
    return arrangement.filter(item => {
      return item.name.toLowerCase().includes(text);
    });

  }

}
