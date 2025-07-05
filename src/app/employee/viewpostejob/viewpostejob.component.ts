import { Component, OnInit } from '@angular/core';
import { BookversesservicesService } from '../../services/bookversesservices.service';

@Component({
  selector: 'app-viewpostejob',
  templateUrl: './viewpostejob.component.html',
  styleUrl: './viewpostejob.component.css'
})
export class ViewpostejobComponent implements OnInit {

  jobData:any[]=[];

  constructor(private bookversesservicesService:BookversesservicesService){}

  ngOnInit(): void {
    const userId = localStorage.getItem('userid');

    if(userId){
      this.bookversesservicesService.getJobsByUserId(+userId).subscribe({
        next:(response)=>{
          console.log(response);
          
          this.jobData = response.data;      
        }
      })
    }

  }

}
