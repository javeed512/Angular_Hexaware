import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

    productList:Product[] = [];

    constructor(private productService:ProductlistService){}


    getAll(){

          

       this.productService.getAllProducts().subscribe(
        
        (list)=>{  this.productList = list}
        
        );


    }


}
