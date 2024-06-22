import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isloginview: boolean = true;
  loginobj: any = {
    emailId: '',
    password: '',
  };
  registerobj: any = {
    emailId: '',
    password: '',
    username: '',
  };
  mastersrv = inject(MasterService);
  router = inject(Router);
  onlogin() {
    // --with api [we have to run the port in cmd=ng s --port 4209]
    debugger;
    this.mastersrv.login(this.loginobj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    });

    // ---without api
    // debugger;
    // const localdata = localStorage.getItem('navinlocal');
    // if (localdata != null) {
    //   const users = JSON.parse(localdata);
    //   const isuserfound = users.find(
    //     (m: any) =>
    //       m.emailId == this.loginobj.emailId &&
    //       m.password == this.loginobj.password
    //   );
    //   if (isuserfound != undefined) {
    //     this.router.navigateByUrl('dashboard');
    //   } else {
    //     alert('Username or Password is Wrong');
    //   }
    // } else {
    //   alert('No User Found');
    // }
  }
  Register() {
    debugger;
    const localdata = localStorage.getItem('navinlocal');
    if (localdata != null) {
      const localArray = JSON.parse(localdata);
      localArray.push(this.registerobj);
      localStorage.setItem('navinlocal', JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.registerobj);
      localStorage.setItem('navinlocal', JSON.stringify(localArray));
    }
    alert('Registration Success');
  }
}
