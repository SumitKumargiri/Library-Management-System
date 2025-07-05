import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookversesservicesService } from '../../services/bookversesservices.service';

@Component({
  selector: 'app-jsdashboard',
  templateUrl: './jsdashboard.component.html',
  styleUrls: ['./jsdashboard.component.css']
})
export class JsdashboardComponent implements OnInit {
  jobs: any[] = [];
  selectedJob: any = null;

  constructor(
    private bookversesservicesService: BookversesservicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookversesservicesService.getAllJobs().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.jobs = response.data;
        } else {
          console.error('Failed to load job data.');
        }
      },
      error: (error) => {
        console.error('Error fetching data from API:', error);
      }
    });

    this.route.params.subscribe((params) => {
      const jobId = params['id'];
      if (jobId) {
        this.selectedJob = this.jobs.find((job) => job.id === +jobId);
      }
    });
  }

  viewJobDetails(job: any): void {
    this.selectedJob = job;
    this.router.navigate(['/jobseeker/jsdashboard', job.id]);
  }

  backToList(): void {
    this.selectedJob = null;
    this.router.navigate(['/jobseeker/jsdashboard']);
  }

  applyForJob(jobRole: string): void {
    this.router.navigate(['/jobseeker/applyjob'], { queryParams: { role: jobRole } });
  }
}
