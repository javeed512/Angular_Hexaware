import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

   constructor(private  empService:EmployeeService){}

  insertEmployee(data:Employee){
    
        this.empService.insert(data)
        .subscribe(
          (emp)=>{console.log('Added Employee is: '+emp);}
          );


       

  }

}
