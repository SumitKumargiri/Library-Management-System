import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './outer/home/home.component';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';
import { HeaderComponent } from './layout/outerlayout/header/header.component';
import { FooterComponent } from './layout/outerlayout/footer/footer.component';
import { EmployeeloginComponent } from './outer/employeelogin/employeelogin.component';
import { FormsModule } from '@angular/forms';
import { EmpdashboardComponent } from './employee/empdashboard/empdashboard.component';
import { EmployeelayoutComponent } from './layout/employeelayout/employeelayout.component';
import { EmpheaderComponent } from './layout/employeelayout/empheader/empheader.component';
import { EmpfooterComponent } from './layout/employeelayout/empfooter/empfooter.component';
import { PostjobsComponent } from './employee/postjobs/postjobs.component';
import { ViewpostejobComponent } from './employee/viewpostejob/viewpostejob.component';
import { JobseekerloginComponent } from './outer/jobseekerlogin/jobseekerlogin.component';
import { JsdashboardComponent } from './jobseeker/jsdashboard/jsdashboard.component';
import { JobseekerlayoutComponent } from './layout/jobseekerlayout/jobseekerlayout.component';
import { JsheaderComponent } from './layout/jobseekerlayout/jsheader/jsheader.component';
import { JsfooterComponent } from './layout/jobseekerlayout/jsfooter/jsfooter.component';
import { LisEmployeesComponent } from './admin/employee/lis-employees/lis-employees.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './layout/adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './layout/adminlayout/adminfooter/adminfooter.component';
import { AdminloginComponent } from './outer/adminlogin/adminlogin.component';
import { AppliedjobComponent } from './jobseeker/appliedjob/appliedjob.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { ApplyjobComponent } from './jobseeker/applyjob/applyjob.component';
import { EmployeeregisterComponent } from './outer/employeeregister/employeeregister.component';
import { JobseekerregisterComponent } from './outer/jobseekerregister/jobseekerregister.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OuterlayoutComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeloginComponent,
    EmpdashboardComponent,
    EmployeelayoutComponent,
    EmpheaderComponent,
    EmpfooterComponent,
    PostjobsComponent,
    ViewpostejobComponent,
    JobseekerloginComponent,
    JsdashboardComponent,
    JobseekerlayoutComponent,
    JsheaderComponent,
    JsfooterComponent,
    LisEmployeesComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminloginComponent,
    AppliedjobComponent,
    ApplyjobComponent,
    EmployeeregisterComponent,
    JobseekerregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    FormsModule,
    jqxChartModule
  ],
  providers: [
    provideAnimations(), 
    provideToastr(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '749967038180-2p2smervn8tbq46dv5tgfdvbtr8cd1dv.apps.googleusercontent.com',{
                oneTapEnabled:false,
                prompt:'consent'
              }
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
