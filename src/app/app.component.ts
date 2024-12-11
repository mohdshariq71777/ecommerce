import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dashboardServ:DashboardService){}
  ngOnInit(): void {
    this.dashboardServ.getAllProducts().subscribe((products:Product[])=>{
      console.log(products)
    });
  }
}
