import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatagoryTableService {
  tURL:any = 'http://172.16.212.171:8080/api/master_medicine/join'
  sURL:any = 'http://172.16.212.171:8080/drug_category'
  UPDATE_URL = 'http://172.16.212.171:8080/api/update/category'
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.tURL)
  }

  getCatagories(){
    return this.http.get(this.sURL)
  }

  updateCategory(updatedRow:any){
    return this.http.post(this.UPDATE_URL, updatedRow )
  }
}
