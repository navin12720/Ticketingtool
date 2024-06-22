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
  //  ----for Roles
  getAllRoles() {
    return this.http.get(`${this.apiurl}GetAllRoles`);
  }

  // ---for department
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

  // ----for parent category
  getAllPCategory() {
    return this.http.get(`${this.apiurl}GetParentCategory`);
  }
  createPCategory(obj: any) {
    return this.http.post(`${this.apiurl}CreateParentCategory`, obj);
  }
  updatePCategory(obj: any) {
    return this.http.put(`${this.apiurl}UpdateParentCategory`, obj);
  }
  deletePCategoryById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteParentCategory?id=${id}`);
  }

  // ---for child category
  getAllCCategory() {
    return this.http.get(`${this.apiurl}GetChildCategory`);
  }
  createCCategory(obj: any) {
    return this.http.post(`${this.apiurl}CreateChildCategory`, obj);
  }
  updateCCategory(obj: any) {
    return this.http.put(`${this.apiurl}UpdateChildCategory`, obj);
  }
  deleteCCategoryById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteChildCategory?id=${id}`);
  }

  // ----for Employees
  getAllEmployee() {
    return this.http.get(`${this.apiurl}GetEmployees`);
  }
  createEmployee(obj: any) {
    return this.http.post(`${this.apiurl}CreateEmployee`, obj);
  }
  updateEmployee(obj: any) {
    return this.http.put(`${this.apiurl}UpdateEmployee`, obj);
  }
  deleteEmployeeById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteEmployee?id=${id}`);
  }
}
