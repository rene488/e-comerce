import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { DateAgoPipe } from './date-ago.pipe';





@NgModule({
  declarations: [
   FilterPipe,
   DateAgoPipe
    
  ],
  exports: [FilterPipe, DateAgoPipe],
})
export class PipesModule { }
