import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childcategory.component.html',
  styleUrl: './childcategory.component.css',
})
export class ChildcategoryComponent {
  mastersrv = inject(MasterService);
  gridlist: any[] = [];
  parentcategorylist: any[] = [];
  newobj: any = {
    categoryName: '',
    parentCategoryId: 0,
    childCategoryId: 0,
  };
  ngOnInit(): void {
    this.getgridData();
    this.getPCategory();
  }

  getPCategory() {
    this.mastersrv.getAllPCategory().subscribe((res: any) => {
      debugger;
      this.parentcategorylist = res.data;
    });
  }

  getgridData() {
    this.mastersrv.getAllCCategory().subscribe((res: any) => {
      debugger;
      this.gridlist = res.data;
    });
  }
  save() {
    debugger;
    this.mastersrv.createCCategory(this.newobj).subscribe((res: any) => {
      if (res.result) {
        alert('Category Created Success');
        this.getgridData();
      } else {
        alert(res.message);
      }
    });
  }

  Update() {
    debugger;
    this.mastersrv.updateCCategory(this.newobj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Category Updated Success');
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
      this.mastersrv.deleteCCategoryById(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Category Deleted Successfully');
          this.getgridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
