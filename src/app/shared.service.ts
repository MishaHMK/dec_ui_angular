import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44343/api"
  readonly PhotoUrl = "https://localhost:44343/Photo/";


  constructor(private http: HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/departments');
  }

  addDep(val : any){
    return this.http.post(this.APIUrl + '/departments', val);
  }

  updDep(val : any){
    return this.http.put(this.APIUrl + '/departments', val);
  }

  delDep(val : any){
    return this.http.delete(this.APIUrl + '/departments/' + val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/employee');
  }

  addEmp(val : any){
    return this.http.post(this.APIUrl + '/employee', val);
  }

  updEmp(val : any){
    return this.http.put(this.APIUrl + '/employee', val);
  }

  delEmp(val : any){
    return this.http.delete(this.APIUrl + '/employee/' + val);
  }

  uploadPhoto(val : any){
    return this.http.post(this.APIUrl + '/employee/savefile', val);
  }

  getAllDepNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/employee/GetAllDepartmentNames');
  }


  getCardList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/PaymentDetails');
  }

  addCard(val : any){
    return this.http.post(this.APIUrl + '/PaymentDetails', val);
  }

  updCard(val : any){
    return this.http.put(this.APIUrl + '/PaymentDetails', val);
  }

  delCard(val : any){
    return this.http.delete(this.APIUrl + '/PaymentDetails/' + val);
  }

  getCardEmp(id : any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/paymentdetails/emp/" + id);
  }
}
