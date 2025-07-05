import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrl: './empdashboard.component.css'
})
export class EmpdashboardComponent implements OnInit{

  chartSettings: any; 
  apiUrl = 'https://localhost:7037/Employee/count'; // API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      if (response.success && response.data) {
        // Prepare chart settings
        this.chartSettings = {
          title: "Role Counts",
          description: "Counts of roles fetched from API",
          showLegend: true,
          padding: { left: 10, top: 10, right: 10, bottom: 10 },
          titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
          source: response.data, // Use API data
          xAxis: {
            dataField: 'role',
            displayText: 'Role'
          },
          valueAxis: {
            title: { text: 'Role Count' }
          },
          seriesGroups: [
            {
              type: 'pie', // Chart type
              series: [
                { dataField: 'role_count', displayText: 'Count' }
              ]
            }
          ]
        };
      } else {
        console.error('Failed to fetch data from API');
      }
    });
  }
}
