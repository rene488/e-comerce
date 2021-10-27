import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { DateAgoPipe } from './date-ago.pipe';





@NgModule({
  declarations: [
   FiltroPipe,
   DateAgoPipe
    
  ],
  exports: [FiltroPipe, DateAgoPipe],
})
export class PipesModule { }
