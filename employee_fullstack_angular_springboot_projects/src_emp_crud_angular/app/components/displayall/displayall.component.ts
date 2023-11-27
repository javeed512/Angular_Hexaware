import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent {

    empList:Employee[] = [];

    constructor(private empService:EmployeeService){}

  getAllEmployees(){
    
      this.empService.getAll().subscribe( 
                                (list)=>{ this.empList = list;  console.log(list)}
                                
                                  );

          

 }

  deleteById(eid:number){

        this.empService.delete(eid).subscribe( (msg)=>{ console.log("Deleted "+msg);});

      
        this.getAllEmployees(); // to refresh list again

  }


}