import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  

  sid:number = 0;

  sname:string = "";

  dob:Date = new Date();

  items:string[] = ["apple","banana","grape","kiwi","organ"];


  imageURL = "../../assets/car.jpg"


   course:string='';

   mycolor = 'pink';

  studentList = [
    {"id":101,"sname":"adam","fee":9000},
    {"id":102,"sname":"smith","fee":3000},
    {"id":103,"sname":"ford","fee":4000},
    {"id":104,"sname":"tom","fee":12000},
    {"id":105,"sname":"jerry","fee":7000}
  
  ]




  ngOnInit(): void {

      this.sid = 101;
      this.sname = "javeed";
    
    
  }


    getData(){


        alert(this.sid +" "+this.sname);

    }



      isValid(){


        return true;
      }


}
