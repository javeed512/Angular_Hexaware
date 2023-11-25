import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

    product:Product = {"pid":0,"pname":'', "price":0};

    constructor(private productService:ProductlistService){}


    addProduct(data:any){

        console.log(data.form.value)

        this.productService.addProduct(data.form.value);

    }


}
