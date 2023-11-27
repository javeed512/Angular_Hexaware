import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';

  parentData:string = "Hi I am Parent";  // it can be any type of data like json,arrays,boolean,number

  parentObj = {'id':101,'name':'javeed','city':'hyd','active':true};


  getChildData(data:any){

      console.log(data);

  }


}
