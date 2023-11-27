import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  parentInput:string = '';

  @Input()
  parentInputObj = {};



  @Output()
  childOutput:EventEmitter<string> = new EventEmitter();

  childData:string = "I am child , i want iphone 20";


  sendDataToParent(){

          this.childOutput.emit(this.childData);

  }



  ngOnInit(): void {
    console.log(this.parentInput)

    console.log(this.parentInputObj)
  }

}
