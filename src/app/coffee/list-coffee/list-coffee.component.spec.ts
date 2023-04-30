/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListCoffeeComponent } from './list-coffee.component';
import { CoffeeService } from '../coffee.service';
import { COFFEES } from '../coffee-mocks';
import { of } from 'rxjs';

describe('ListCoffeeComponent', () => {
  let component: ListCoffeeComponent;
  let fixture: ComponentFixture<ListCoffeeComponent>;
  let coffeeService: CoffeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListCoffeeComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoffeeComponent);
    component = fixture.componentInstance;
    coffeeService = TestBed.inject(CoffeeService);
    spyOn(coffeeService, 'getCoffees').and.returnValue(of(COFFEES));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows plus header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4); // tres filas más el encabezado.
  });

});
