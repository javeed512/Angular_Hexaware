import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
    //{path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contactus/:username',component:ContactusComponent},
    {path:'aboutus',component:AboutComponent},
    {path:'callnow',redirectTo:'contactus'},
    {path:'payment/:amount',component:PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
