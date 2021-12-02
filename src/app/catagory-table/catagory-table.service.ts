import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatagoryTableService {
  joinURL:any = 'http://172.16.212.176:8080/api/master_medicine/join'
  categoryURL:any = 'http://172.16.212.176:8080/drug_category'
  UPDATE_URL = 'http://172.16.212.176:8080/api/update/category'
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.joinURL)
  }

  getCatagories(){
    return this.http.get(this.categoryURL)
  }

  updateCategory(updatedRow:any){
    return this.http.post(this.UPDATE_URL, updatedRow )
  }
}
