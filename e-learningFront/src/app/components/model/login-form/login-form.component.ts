import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Login } from 'src/app/class/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  responseDate: any;
  login = new Login();
  ngOnInit(): void {}
  constructor(private authservice: AuthServiceService, private route: Router,) {
    localStorage.clear();
  }

  authlogin() {

    this.authservice.login(this.login).subscribe((res) => {
      if (res  != null) {
        this.responseDate = res;
        console.log('res:',res);
     

        localStorage.setItem('token', this.responseDate.token);
        localStorage.setItem('role', this.responseDate.role);
        localStorage.setItem('image', this.responseDate.image);
        localStorage.setItem('firstname', this.responseDate.firstname);
        console.log(this.responseDate.role == 'admin');
      
        if (this.responseDate.role == 'admin') {
          this.route.navigate(['dashboard']);
       
         
        } else {
          this.route.navigate(['home']);
       
          
        }

        
      }
      if(res.success==true){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }else{  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "there is errror",
      });}
      
    });
  }
}
