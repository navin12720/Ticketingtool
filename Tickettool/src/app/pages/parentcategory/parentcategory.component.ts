import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.css',
})
export class ParentcategoryComponent {
  mastersrv = inject(MasterService);
  gridlist: any[] = [];
  deptlist: any[] = [];
  newobj: any = {
    categoryId: 0,
    categoryName: '',
    deptId: 0,
  };
  ngOnInit(): void {
    this.getgridData();
    this.getAllDept();
  }

  getAllDept() {
    this.mastersrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptlist = res.data;
    });
  }

  getgridData() {
    this.mastersrv.getAllPCategory().subscribe((res: any) => {
      debugger;
      this.gridlist = res.data;
    });
  }
  save() {
    debugger;
    this.mastersrv.createPCategory(this.newobj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Created Success');
        this.getgridData();
      } else {
        alert(res.message);
      }
    });
  }

  Update() {
    debugger;
    this.mastersrv.updatePCategory(this.newobj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Department Updated Success');
        this.getgridData();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newobj = data;
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to Delete?..');
    if (isDelete) {
      this.mastersrv.deletePCategoryById(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Department Deleted Successfully');
          this.getgridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
