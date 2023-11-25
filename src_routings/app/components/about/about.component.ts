import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    paramList:any = [];

  constructor(private route:ActivatedRoute){

      this.route.queryParams.subscribe( 
            (inputs) => {
                this.paramList = inputs; 
                  console.log(this.paramList)
          
             } );

            

  }


}
