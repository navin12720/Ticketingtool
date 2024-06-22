import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ParentcategoryComponent } from './pages/parentcategory/parentcategory.component';
import { ChildcategoryComponent } from './pages/childcategory/childcategory.component';
import { NewticketComponent } from './pages/newticket/newticket.component';
import { TicketlistComponent } from './pages/ticketlist/ticketlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'department', component: DepartmentsComponent },
      { path: 'parent-category', component: ParentcategoryComponent },
      { path: 'child-category', component: ChildcategoryComponent },
      { path: 'new-ticket', component: NewticketComponent },
      { path: 'ticket-list', component: TicketlistComponent },
    ],
  },
];
