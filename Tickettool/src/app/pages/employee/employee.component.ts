import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  mastersrv = inject(MasterService);
  gridlist: any[] = [];
  deptlist: any[] = [];
  rolelist: any[] = [];
  isNewview: boolean = false;
  newobj: any = {
    employeeId: 0,
    employeeName: '',
    contactNo: '',
    emailId: '',
    deptId: 0,
    password: '',
    gender: '',
    role: '',
  };
  ngOnInit(): void {
    this.getgridData();
    this.getAllDept();
    this.getAllRoles();
  }

  getAllDept() {
    this.mastersrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptlist = res.data;
    });
  }

  getAllRoles() {
    this.mastersrv.getAllRoles().subscribe((res: any) => {
      debugger;
      this.rolelist = res.data;
    });
  }
  getgridData() {
    this.mastersrv.getAllEmployee().subscribe((res: any) => {
      debugger;
      this.gridlist = res.data;
    });
  }
  save() {
    debugger;
    this.mastersrv.createEmployee(this.newobj).subscribe((res: any) => {
      if (res.result) {
        alert('Employee Created Success');
        this.getgridData();
      } else {
        alert(res.message);
      }
    });
  }

  Update() {
    debugger;
    this.mastersrv.updateEmployee(this.newobj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Employee Updated Success');
        this.getgridData();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newobj = data;
    this.isNewview = true;
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to Delete?..');
    if (isDelete) {
      this.mastersrv.deleteEmployeeById(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Employee Deleted Successfully');
          this.getgridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
