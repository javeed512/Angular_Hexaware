import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
