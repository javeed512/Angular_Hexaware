import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { DisplayallComponent } from './components/displayall/displayall.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    {path:'home',component:DashboardComponent},
    {path:'addemployee',component:AddemployeeComponent},
    {path:'displayall',component:DisplayallComponent},
    {path:'search/:input',component:SearchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
