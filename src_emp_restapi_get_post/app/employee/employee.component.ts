import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  emp:Employee = new Employee();

    empList:Employee[] =[];

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }


  insertFormData(data:Employee){

      console.log("data from form in component "+data)

      this.service.insert(data);


  }


  updateFormData(data:Employee){

      console.log('updating data for emp : '+data.ename)

      this.service.update(data);


  }



  getAllEmployees(){
    

      this.service.getAll().subscribe((employees: Employee[]) => {this.empList = employees;console.log(this.empList)});

  }




}
