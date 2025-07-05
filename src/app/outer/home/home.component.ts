import { Component, OnInit } from '@angular/core';
import bootstrap from 'bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  // ++++++++++++++++++++++++ third part +++++++++++++++++

  topCompanies = [
    {
      name: 'MNCS',
      info: '2K+ are actively hiring',
      logos: ['https://img.naukimg.com/logo_images/groups/v1/4672331.gif', 'https://img.naukimg.com/logo_images/groups/v1/4631249.gif', 'https://img.naukimg.com/logo_images/groups/v1/2472988.gif','https://img.naukimg.com/logo_images/groups/v1/392358.gif'],
    },
    {
      name: 'Internet',
      info: '206 are actively hiring',
      logos: ['https://img.naukimg.com/logo_images/groups/v1/1285014.gif', 'https://img.naukimg.com/logo_images/groups/v1/20368.gif', 'https://img.naukimg.com/logo_images/groups/v1/4581371.gif','https://img.naukimg.com/logo_images/groups/v1/641374.gif'],
    },
    {
      name: 'Manufacturing',
      info: '861 are actively hiring',
      logos: ['https://img.naukimg.com/logo_images/groups/v1/5038882.gif', 'https://img.naukimg.com/logo_images/groups/v1/4606477.gif','https://img.naukimg.com/logo_images/groups/v1/691574.gif','https://img.naukimg.com/logo_images/groups/v1/331672.gif'],
    },
    {
      name: 'Fortune 500',
      info: '114 are actively hiring',
      logos: ['https://img.naukimg.com/logo_images/groups/v1/4656239.gif', 'https://img.naukimg.com/logo_images/groups/v1/86854.gif','https://img.naukimg.com/logo_images/groups/v1/179636.gif','https://img.naukimg.com/logo_images/groups/v1/24912.gif'],
    },
  ];

  filters = ['All', 'IT Services', 'BFSI'];

  featuredCompanies = [
    {
      name: 'Nagarro',
      rating: 4.0,
      reviews: 4000,
      logo: 'https://img.naukimg.com/logo_images/groups/v2/9558.gif',
      description: 'Leader in digital product engineering.',
    },
    {
      name: 'Datamatics',
      rating: 3.5,
      reviews: 1900,
      logo: 'https://img.naukimg.com/logo_images/groups/v2/315118.gif',
      description: 'Global digital solutions & technology company.',
    },
    {
      name: 'Hitachi Energy',
      rating: 4.1,
      reviews: 597,
      logo: 'https://img.naukimg.com/logo_images/groups/v2/5935206.gif',
      description: 'Advancing a sustainable energy future for all.',
    },
    {
      name: 'Cardinal Health',
      rating: 4.1,
      reviews: 136,
      logo: 'https://img.naukimg.com/logo_images/groups/v2/4673837.gif',
      description: 'Together let’s pursue even better.',
    },
  ];

  filterCompanies(filter: string) {
    console.log(`Filter applied: ${filter}`);
  }
}
