import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError} from 'rxjs';
import { Employee } from './employee';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// HttpClient service
  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/employees/"

  getAll():Observable<Employee[]>{

   return   this.http.get<Employee[]>(this.url);  // all http methods return Observables


  }


  insert(empObj:Employee):Observable<Employee>{

    console.log(empObj)
    return  this.http.post<Employee>(this.url,empObj);


  }

  update(empObj:Employee):Observable<Employee>{

      
 
    console.log(empObj)
    return  this.http.put<Employee>(this.url+empObj.id,empObj);
           

    
    }



}



