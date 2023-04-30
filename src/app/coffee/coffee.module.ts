import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,

  ],
  providers:[HttpClient,],
  declarations: [ListCoffeeComponent],
  exports: [ListCoffeeComponent],
})
export class CoffeeModule { }
