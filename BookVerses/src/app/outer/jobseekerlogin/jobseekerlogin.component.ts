import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookversesservicesService } from '../../services/bookversesservices.service';

@Component({
  selector: 'app-jobseekerlogin',
  templateUrl: './jobseekerlogin.component.html',
  styleUrl: './jobseekerlogin.component.css',
})
export class JobseekerloginComponent implements OnInit {
  loginMethod: string = 'email';
  usernameOrEmail: string = '';
  password: string = '';
  isLoggingIn: boolean = false;

  constructor(
    private toastr: ToastrService,
    private bookversesservicesService: BookversesservicesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoggingIn = true;

    // Validate input fields
    if (!this.usernameOrEmail || !this.password) {
      this.toastr.error('Please fill in all fields.');
      this.isLoggingIn = false;
      return;
    }

    const payload = {
      [this.loginMethod]: this.usernameOrEmail,
      password: this.password,
    };

    // Call the service for login
    this.bookversesservicesService.Jobseekerlogin(payload).subscribe({
      next: (response) => {
        if (response && response.token && response.userId) {
          // Set token and user ID in localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('userid', response.userId);

          // Navigate to dashboard
          this.router.navigate(['/jobseeker/jsdashboard']);
          this.toastr.success('Login successful!');
          console.log('Login Response:', response);
        } else {
          this.toastr.error('Invalid login response. Please try again.');
        }
        this.isLoggingIn = false;
      },
      error: (error) => {
        this.toastr.error('Invalid credentials. Please try again.');
        console.error('Login Error:', error);
        this.isLoggingIn = false;
      },
    });
  }
}
