import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookversesservicesService } from '../../services/bookversesservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit{

   loginMethod: string = 'username';
    usernameOrEmail: string = '';
    password: string = '';
    name: string = ''; 
    isLoggingIn: boolean = false;
    
    constructor(private toastr: ToastrService,private bookversesservicesService: BookversesservicesService,private router: Router) {}
    
    ngOnInit() {
     
    }
    
    onLogin() {
      this.isLoggingIn = true;
      if (!this.usernameOrEmail || !this.password) {
        this.toastr.error('Please fill in all fields.');
        return;
      }
    
      const payload = {
        [this.loginMethod]: this.usernameOrEmail, 
        password: this.password
      };
    
      this.bookversesservicesService.adminlogin(payload).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.isLoggingIn = false;
          this.toastr.success('Login successful!');
        }, 10000);
          this.router.navigate(['/admin/lis-employees']);
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
}
