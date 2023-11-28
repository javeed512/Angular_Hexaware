import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }


    baseURL:string = 'http://localhost:8080/products/';

    getGeneratedToken(requestBody: any){

        return this.http.post(this.baseURL+"authenticate",requestBody,{responseType: 'text' as 'json'});

    }

    authorizationTest(token:any){

          let tokenString = "Bearer "+token;

         const headers =  new HttpHeaders().set("Authorization",tokenString);


        return this.http.get(this.baseURL+"getall",{headers,responseType:'text' as 'json'});

    }


}
