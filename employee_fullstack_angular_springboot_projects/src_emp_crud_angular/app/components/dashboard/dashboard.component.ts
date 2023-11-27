import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   

    data:string = '';

    constructor(private empService:EmployeeService,private router:Router){}
   
      find(searchData:any){

          this.router.navigate(['/search/'+searchData.form.value.data])

          console.log(searchData.form.value.data);
          

      }




}
