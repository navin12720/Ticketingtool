import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
})
export class DepartmentsComponent implements OnInit {
  mastersrv = inject(MasterService);
  deptlist: any[] = [];
  newDeptobj: any = {
    deptId: 0,
    deptName: '',
    createdDate: '',
  };
  ngOnInit(): void {
    this.getDept();
  }
  getDept() {
    this.mastersrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptlist = res.data;
    });
  }
  saveDept() {
    debugger;
    this.mastersrv.createNewDept(this.newDeptobj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Created Success');
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }

  UpdateDept() {
    debugger;
    this.mastersrv.updateDept(this.newDeptobj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Department Updated Success');
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newDeptobj = data;
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to Delete?..');
    if (isDelete) {
      this.mastersrv.deleteDeptById(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Department Deleted Successfully');
          this.getDept();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
