import { Component, OnInit } from '@angular/core';
import { ProductsListService } from './../../../dashboard/products-list/services/products-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchTerm: string = '';
  constructor(private service: ProductsListService) {}


  ngOnInit(): void {

  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }
}
