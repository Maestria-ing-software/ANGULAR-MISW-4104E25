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
  constructor(private coffeeService: CoffeeService) { }
  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(
      (coffees) =>{
        this.coffees = coffees;
      }
    )
  }
  ngOnInit() {
    this.getCoffees();
  }
}
