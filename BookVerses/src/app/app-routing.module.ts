import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';
import { HomeComponent } from './outer/home/home.component';
import { EmployeeloginComponent } from './outer/employeelogin/employeelogin.component';
import { EmployeelayoutComponent } from './layout/employeelayout/employeelayout.component';
import { EmpdashboardComponent } from './employee/empdashboard/empdashboard.component';
import { PostjobsComponent } from './employee/postjobs/postjobs.component';
import { ViewpostejobComponent } from './employee/viewpostejob/viewpostejob.component';
import { JobseekerlayoutComponent } from './layout/jobseekerlayout/jobseekerlayout.component';
import { JsdashboardComponent } from './jobseeker/jsdashboard/jsdashboard.component';
import { JobseekerloginComponent } from './outer/jobseekerlogin/jobseekerlogin.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { LisEmployeesComponent } from './admin/employee/lis-employees/lis-employees.component';
import { AdminloginComponent } from './outer/adminlogin/adminlogin.component';
import { ApplyjobComponent } from './jobseeker/applyjob/applyjob.component';
import { AppliedjobComponent } from './jobseeker/appliedjob/appliedjob.component';
import { EmployeeregisterComponent } from './outer/employeeregister/employeeregister.component';
import { JobseekerregisterComponent } from './outer/jobseekerregister/jobseekerregister.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminlayoutComponent,
    children:[
      {path:'lis-employees',component:LisEmployeesComponent},
      {path:'',redirectTo:'empdashboard',pathMatch:'full'}
    ]
  },
  {
    path:'employee',
    component:EmployeelayoutComponent,
    children:[
      {path:'empdashboard',component:EmpdashboardComponent},
      {path:'postjobs',component:PostjobsComponent},
      {path:'viewpostejob',component:ViewpostejobComponent},
      {path:'',redirectTo:'empdashboard',pathMatch:'full'}
    ]
  },


  {
    path:'jobseeker',
    component:JobseekerlayoutComponent,
    children:[
      { path: 'jsdashboard', component: JsdashboardComponent },
      { path: 'jsdashboard/:id', component: JsdashboardComponent },
      {path:'applyjob',component:ApplyjobComponent},
      {path:'appliedjob',component:AppliedjobComponent},
      { path: '**', redirectTo: 'jsdashboard' }
    ]
  },

  {
    path:'outer',
    component:OuterlayoutComponent,
    children:[
      {path:'adminlogin',component:AdminloginComponent},
      {path:'',redirectTo:'empdashboard',pathMatch:'full'}
    ]
  },


  {
    path:'',
    component:OuterlayoutComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'employeelogin',component:EmployeeloginComponent},
      {path:'jobseekerlogin',component:JobseekerloginComponent},
      {path:'employeeregister',component:EmployeeregisterComponent},
      {path:'jobseekerregister',component:JobseekerregisterComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
