import { Component, OnInit } from '@angular/core';
import { BookversesservicesService } from '../../services/bookversesservices.service';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.css'],
})
export class AppliedjobComponent implements OnInit {
  jobs: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private jobSeekerService: BookversesservicesService) {}

  ngOnInit(): void {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem('userid');
    if (storedUserId) {
      const userId = +storedUserId; // Convert to number
      this.fetchAppliedJobs(userId);
    } else {
      this.errorMessage = 'User ID is not available in localStorage.';
      this.loading = false;
    }
  }

  fetchAppliedJobs(userId: number): void {
    this.jobSeekerService.getAppliedJobs(userId).subscribe(
      (response: any) => {
        if (response.success) {
          this.jobs = response.data;
        } else {
          this.errorMessage = 'Failed to fetch job data.';
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching applied jobs', error);
        this.errorMessage = 'An error occurred while fetching data.';
        this.loading = false;
      }
    );
  }
}
