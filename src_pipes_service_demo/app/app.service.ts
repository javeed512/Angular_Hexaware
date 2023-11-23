import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  data = [

      {"pid":101,"pname":"mobile","price":5000},
      {"pid":102,"pname":"laptop","price":88000},
      {"pid":103,"pname":"charger","price":6000},
      {"pid":104,"pname":"pendrive","price":400}
  ];

  constructor() { }


    getAllData(){


        return this.data; // http.get("http://localhost:8080/api/products/getall")

    }



}
