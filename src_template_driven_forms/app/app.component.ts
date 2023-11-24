import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';

  email:string = '';
  password:string = '';
  status=false;


  readFormData(data:any){

      console.log(data.form.value)


  }



}
