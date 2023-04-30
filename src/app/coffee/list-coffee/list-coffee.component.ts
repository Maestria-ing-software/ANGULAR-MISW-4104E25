import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})
export class ListCoffeeComponent implements OnInit {
  coffees: Array<Coffee> = [];
  totalCafesOrigen: number = 0;
  totalCafesBlend: number = 0;

  constructor(private coffeeService: CoffeeService) { }
  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(
      (coffees) =>{
        this.coffees = coffees;

        for (let coffee of this.coffees) {
          if (coffee.tipo === 'Café de Origen') {
            this.totalCafesOrigen++;
          } else if (coffee.tipo === 'Blend') {
            this.totalCafesBlend++;
          }
        }

      }
    )
  }
  ngOnInit() {
    this.getCoffees();
  }
}
