import { EtudiantService } from './../../../service/etudiant.service';
import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/class/etudiant';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css']
})
export class RegisterEtudiantComponent   {
  constructor(private builder: FormBuilder, private service: EtudiantService, private router: Router,
    private toastr: ToastrService) {

  }
  etudiant=new Etudiant;

  registerform = this.builder.group({
    lastname: this.builder.control('', Validators.required),
    firstname: this.builder.control('', Validators.required),
    password: this.builder.control('',Validators.required),
    email: this.builder.control('',Validators.required),
    class: this.builder.control('', Validators.required),
    birthday: this.builder.control('', Validators.required),
  });


  insertData(){

    this.service.AddEtudiant(this.etudiant).subscribe(res=>{
      console.log(res);    
      this.toastr.success('Registered successfully')
      this.router.navigate(['login'])
  
    })
   
  }

}
