import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 60000),
    new SalesPerson("Mai", "Truong", "mai.truong@gmail.com", 90000)
  ];


/* . . . */

}

