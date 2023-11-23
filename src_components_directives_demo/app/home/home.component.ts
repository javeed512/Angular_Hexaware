import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Welcome to HomeTemplate</h1>',
  styles: ['h1{color:green}'],
  providers:[]
})
export class HomeComponent implements OnInit {


   
   


      public constructor(){
          
   
            console.log('this is home constructor');
      }



  ngOnInit(): void {
    
          console.log('ngOnInit() invoked..');


  }

  

}
