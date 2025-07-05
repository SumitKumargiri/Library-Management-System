import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { BookversesservicesService } from '../../services/bookversesservices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrl: './employeelogin.component.css'
})
export class EmployeeloginComponent implements OnInit{

loginMethod: string = 'email';
// loginMethod: string = 'email';
usernameOrEmail: string = '';
password: string = '';
name: string = ''; 

constructor(private toastr: ToastrService,private socialAuthService: SocialAuthService,private bookversesservicesService: BookversesservicesService,private router: Router) {}

ngOnInit() {
  this.socialAuthService.authState.subscribe((user: SocialUser) => {
    if (user) {
      this.name = user.name;
      console.log('Google User:', user);
      const idToken = user.idToken;
      this.googleLogin(idToken);
    }
  });
}

onLogin() {
  if (!this.usernameOrEmail || !this.password) {
    this.toastr.error('Please fill in all fields.');
    return;
  }

  const payload = {
    [this.loginMethod]: this.usernameOrEmail, 
    password: this.password
  };

  this.bookversesservicesService.login(payload).subscribe({
    next: (response) => {
      this.toastr.success('Login successful!');
      this.router.navigate(['/employee/empdashboard']);
      localStorage.setItem('userid', response.userId);
      localStorage.setItem('token', response.token);
      console.log('Login Response:', response);
    },
    error: (error) => {
      this.toastr.error('Invalid credentials. Please try again.');
      console.error('Login Error:', error);
    }
  });
}

googleLogin(idToken: string) {
  this.bookversesservicesService.sendIdTokenToBackend(idToken).subscribe({
    next: (response) => {
      this.toastr.success('Google login successful!');
      this.router.navigate(['/employee/empdashboard']);
      console.log('Google Login Response:', response);
    },
    error: (error) => {
      this.toastr.error('Google login failed. Check console for details.');
      console.error('Google Login Error:', error);
    }
  });
}

}
