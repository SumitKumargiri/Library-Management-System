import { Component, OnInit } from '@angular/core';
import { BookversesservicesService } from '../../services/bookversesservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrls: ['./postjobs.component.css']
})
export class PostjobsComponent implements OnInit {

  jobData = {
    userid: 0,
    role: '',
    company_name:'',
    description: '',
    location: '',
    package: '',
    mode: '',
    skill: '',
    noofhiring: 0,
    image: '', 
  };

  constructor(private bookversesservicesService: BookversesservicesService,private toastr:ToastrService) {}

  ngOnInit() {
    const userid = localStorage.getItem('userid');
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // const max_size = 20971520;
      // const allowed_types = ['image/png', 'image/jpeg'];
      // const max_height = 15200;
      // const max_width = 25600;

      const reader = new FileReader();
      reader.onload = () => {
        this.jobData.image = reader.result as string; 
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.jobData.userid) {
      console.error('User ID is missing!');
      return;
    }

    this.bookversesservicesService.postJob(this.jobData).subscribe({
      next: (response) => {
        console.log('Job posted successfully:', response);
        this.toastr.success("Job posted successfully!");
        this.clearForm();
        //alert('Job posted successfully!');
      },
      error: (error) => {
        console.error('Error posting job:', error);
        this.toastr.error("Job posted Failed!");
        //alert('Failed to post the job. Please try again.');
      }
    });
  }

  clearForm() {
    this.jobData = {
      userid: this.jobData.userid,
      role: '',
      company_name:'',
      description: '',
      location: '',
      package: '',
      mode: '',
      skill: '',
      noofhiring: 0,
      image: '', 
    };
  }
}
