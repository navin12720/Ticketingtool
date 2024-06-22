import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiurl: string = 'https://freeapi.miniprojectideas.com/api/TicketsNew/';
  constructor(private http: HttpClient) {}
  login(object: any) {
    debugger;
    return this.http.post(this.apiurl + 'Login', object);
  }
  getAllDept() {
    return this.http.get(`${this.apiurl}GetDepartments`);
  }
  createNewDept(obj: any) {
    return this.http.post(`${this.apiurl}CreateDepartment`, obj);
  }
  updateDept(obj: any) {
    return this.http.put(`${this.apiurl}UpdateDepartment`, obj);
  }
  deleteDeptById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteDepartment?id=${id}`);
  }
}
