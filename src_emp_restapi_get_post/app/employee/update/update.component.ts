import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  constructor(private service:EmployeeService){}

  
  updateFormData(data:Employee){

    console.log('updating data for emp : '+data.ename)

    this.service.update(data);


}



}
