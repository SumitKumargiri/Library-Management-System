import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookversesservicesService } from '../../services/bookversesservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css'],
})
export class ApplyjobComponent implements OnInit {
  states: string[] = [];
  uniqueStates: string[] = [];
  districts: string[] = [];
  selectedState: string = '';
  selectedDistrict: string = '';
  fileError: string | null = null;
  jobSeekerData: any = {
    userid: 0,
    firstname: '',
    lastname: '',
    email: '',
    stateName: '',
    districtName: '',
    role: '',
    mobilenumber: null,
    resume: '',
  };

  constructor(private route: ActivatedRoute,private bookversesservicesService: BookversesservicesService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getStates();

    this.route.queryParams.subscribe((params) => {
      if (params['role']) {
        this.jobSeekerData.role = params['role']; 
      }
    });
  }

  getStates(): void {
    this.bookversesservicesService.getStates().subscribe((response) => {
      if (response.success) {
        const allStates = response.data.map((item: any) => item.stateName);
        this.uniqueStates = Array.from(new Set(allStates));
      }
    });
  }

  onStateChange(stateName: string): void {
    this.bookversesservicesService.getDistrictsByStateName(stateName).subscribe((response) => {
      if (response.success) {
        this.districts = response.data.map((item: any) => item.districtName);
      }
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.fileError = null;

    if (!file) {
      return;
    }

    const allowedFormats = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedFormats.includes(file.type)) {
      this.fileError = 'Invalid file format. Only PDF and Word documents are allowed.';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.fileError = 'File size exceeds the maximum limit of 5MB.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = (reader.result as string).split(',')[1];
      this.jobSeekerData.resume = base64String; 
    };
    reader.readAsDataURL(file);
  }

  submitJobSeekerData(): void {
    if (this.fileError) {
      this.toastr.error('Please fix the file upload error before submitting.');
      return;
    }

    const id = parseInt(localStorage.getItem('userid') || '0', 10);
    this.jobSeekerData.stateName = this.selectedState;
    this.jobSeekerData.districtName = this.selectedDistrict;

    this.bookversesservicesService.postJobSeekerData(id, this.jobSeekerData).subscribe(
      (response) => {
        if (response.success) {
          this.toastr.success('Your form was submitted successfully!');
          this.resetForm();
        }
      },
      (error) => {
        console.error('Error submitting data:', error);
        this.toastr.error('Data submission failed. Please try again.');
      }
    );
  }

  resetForm(): void {
    this.jobSeekerData = {
      userid: 0,
      firstname: '',
      lastname: '',
      email: '',
      stateName: '',
      districtName: '',
      role: '',
      mobilenumber: null,
      resume: '',
    };
    this.selectedState = '';
    this.selectedDistrict = '';
    this.fileError = null;
    this.districts = [];
  }
  
}
