import { Component } from '@angular/core';
import { BookversesservicesService } from '../../services/bookversesservices.service';
import { EmployeeRegistration } from '../../interface/user';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrl: './employeeregister.component.css'
})
export class EmployeeregisterComponent {

  registrationData: EmployeeRegistration = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    mobilenumber: 0
  };

  constructor(private bookversesservicesService: BookversesservicesService) {}

  onSubmit() {
    this.bookversesservicesService.registerEmployee(this.registrationData).subscribe(
      response => {
        console.log('Employee Registered:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }
}
