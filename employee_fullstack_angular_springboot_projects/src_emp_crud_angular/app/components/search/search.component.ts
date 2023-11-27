import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  empSearchList:Employee[] =[];

    constructor(private route:ActivatedRoute, private empService:EmployeeService){}
 
    ngOnInit(): void {
     
      this.find();
  }
   
     searchInput:string = '';

    find(){

          // Here we search employees records , whose salary is greater than input = 15000 or input = 50000

        this.route.params.subscribe( (param)=>{ this.searchInput = param['input']});

        this.empService.find(this.searchInput).subscribe( (list)=> {this.empSearchList = list;console.log('list '+list)});
       
        console.log('serached data '+this.empSearchList);

    }

    

}
