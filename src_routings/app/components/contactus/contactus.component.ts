import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

    user:string = '';

    constructor(private  route:ActivatedRoute){

        this.route.params.subscribe( data => { this.user = data['username']});

    }


}
