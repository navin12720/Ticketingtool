import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newticket.component.html',
  styleUrl: './newticket.component.css',
})
export class NewticketComponent implements OnInit {
  deptlist: any[] = [];
  PCategorylist: any[] = [];
  CCategorylist: any[] = [];
  filterCategory: any[] = [];
  selectPCategory: string = '';
  newTicketobj: any = {
    employeeId: 0,
    severity: '',
    childCategoryId: 0,
    deptId: 0,
    requestDetails: '',
  };
  mastersrv = inject(MasterService);
  ngOnInit(): void {
    const loggeduserData = localStorage.getItem('ticketUser');
    if (loggeduserData != null) {
      const userData = JSON.parse(loggeduserData);
      this.newTicketobj.employeeId = userData.employeeId;
    }
    this.getDept();
    this.getPCategory();
    this.getCCategory();
  }

  onCategorychange() {
    this.filterCategory = this.CCategorylist.filter(
      (x) => x.parentCategoryName == this.selectPCategory
    );
  }
  getDept() {
    this.mastersrv.getAllDept().subscribe((res: any) => {
      this.deptlist = res.data;
    });
  }
  getPCategory() {
    this.mastersrv.getAllPCategory().subscribe((res: any) => {
      this.PCategorylist = res.data;
    });
  }
  getCCategory() {
    this.mastersrv.getAllCCategory().subscribe((res: any) => {
      this.CCategorylist = res.data;
    });
  }
  oncreateTicket() {
    this.mastersrv.newTicket(this.newTicketobj).subscribe((res: any) => {
      if (res.result) {
        alert('Ticket created successfully');
      } else {
        alert(res.message);
      }
    });
  }
}
