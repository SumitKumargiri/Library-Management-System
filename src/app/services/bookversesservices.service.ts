import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRegistration } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class BookversesservicesService {

  private readonly apiUrl = 'https://localhost:7037'; 

  constructor(private http: HttpClient) {}

  adminlogin(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/adminlogin`, payload);
  }

  sendIdTokenToBackend(idToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/googlelogin`, { idToken });
  }

  login(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/employeelogin`, payload);
  }
  registerEmployee(data: EmployeeRegistration): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/employeeregistration`, data);
  }

  Jobseekerlogin(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/jobseekerlogin`, payload);
  }
  registerJobseeker(data: EmployeeRegistration): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/jobseekerregister`, data);
  }

  postJob(jobData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Employee/postjob`, jobData);
  }

  getJobsByUserId(userid: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Employee/getjob?userid=${userid}`);
  }

  updateJobImage(userid: number, imageBase64: string) {
    return this.http.post(`${this.apiUrl}/Employee/getjob?userid=${userid}`, {image: imageBase64,});
  }

  getAllJobs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/JobSeeker/GetalljobData`);
  }
  
  
   // Fetch states
   getStates(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Admin/allStateDistrict`);
  }

  // Fetch districts based on state name
  getDistrictsByStateName(stateName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Admin/getdistrictbystatename?StateName=${stateName}`);
  }

  postJobSeekerData(id:number,data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/JobSeeker/jobseekerapplieddata/${id}`, data);
  }

  viewapplieddata(userid:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/JobSeeker/viewapplieddata/${userid}`);
  }

  getAppliedJobs(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/JobSeeker/viewapplieddata/${userId}`);
  }
}
