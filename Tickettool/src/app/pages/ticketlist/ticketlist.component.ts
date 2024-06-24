import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticketlist',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './ticketlist.component.html',
  styleUrl: './ticketlist.component.css',
})
export class TicketlistComponent implements OnInit {
  mode: string = 'My Tickets';
  loggedUserEmpid: any;
  username: any;
  mastersrv = inject(MasterService);

  ngOnInit(): void {
    const loggeduserData = localStorage.getItem('ticketUser');
    if (loggeduserData != null) {
      const userData = JSON.parse(loggeduserData);
      this.loggedUserEmpid = userData.employeeId;
      this.username = userData.employeeName;
    }
    this.changemode(this.mode);
  }
  ticketList: any[] = [];
  changemode(tab: string) {
    this.mode = tab;
    if (this.mode == 'My Tickets') {
      this.mastersrv
        .getTicketCreatedByLoggedEmp(this.loggedUserEmpid)
        .subscribe((res: any) => {
          this.ticketList = res.data;
        });
    } else {
      this.mastersrv
        .getTicketsAssignedToEmp(this.loggedUserEmpid)
        .subscribe((res: any) => {
          this.ticketList = res.data;
        });
    }
  }
  changeStatus(state: string, ticketId: number) {
    if (state == 'start') {
      this.mastersrv.startTicket(ticketId).subscribe((res: any) => {
        if (res.result) {
          alert('Ticket Status Changed');
          this.changemode(this.mode);
        } else {
          alert(res.message);
        }
      });
    } else {
      this.mastersrv.closeTicket(ticketId).subscribe((res: any) => {
        if (res.result) {
          alert('Ticket Closed');
          this.changemode(this.mode);
        } else {
          alert(res.message);
        }
      });
    }
  }
}
