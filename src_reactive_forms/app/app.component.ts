import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  submitted:boolean = false;

  registerFormGroup!: FormGroup;

    constructor(private formBuilder:FormBuilder)
    {
    }
  ngOnInit(): void {
    
      this.registerFormGroup = this.formBuilder.group({

            firstName:['',[Validators.required]],
            lastName:['',[Validators.required,Validators.minLength(6)]],
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.maxLength(12)]]


      });
  }

  get f(){

    return this.registerFormGroup.controls;
  }


  onSubmit(){

    this.submitted = true;

      if(this.registerFormGroup.invalid){

                return;
      }

      alert("Registration Successful !");


  }

    
  

}
