import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCoffeeComponent],
  exports: [ListCoffeeComponent],
})
export class CoffeeModule { }
