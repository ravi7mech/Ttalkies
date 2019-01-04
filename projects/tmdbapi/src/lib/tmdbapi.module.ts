import { NgModule } from '@angular/core';
import { TmdbapiComponent } from './tmdbapi.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TmdbapiComponent],
  imports: [
    HttpClientModule
  ],
  exports: [TmdbapiComponent]
})
export class TmdbapiModule { }
