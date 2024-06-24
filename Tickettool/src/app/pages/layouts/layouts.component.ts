import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent implements OnInit {
  router = inject(Router);
  username: any;
  onLogoff() {
    localStorage.removeItem('ticketUser');
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    const loggeduserData = localStorage.getItem('ticketUser');
    if (loggeduserData != null) {
      const userData = JSON.parse(loggeduserData);
      this.username = userData.employeeName;
    }
  }
}
