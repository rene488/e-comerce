import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

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
