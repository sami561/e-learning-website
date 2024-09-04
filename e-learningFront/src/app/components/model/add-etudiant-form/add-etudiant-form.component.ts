import { ToastrService } from 'ngx-toastr';
import { Etudiant } from './../../../class/etudiant';
import { Component, Inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-etudiant-form',
  templateUrl: './add-etudiant-form.component.html',
  styleUrls: ['./add-etudiant-form.component.css']
})
export class AddEtudiantFormComponent implements OnInit {
  
  public hide: boolean = false;
  etudiants:any;
  etudiant=new Etudiant;
  

  ngOnInit(): void {
    
  }
  constructor(private etudiantService:EtudiantService,private router:Router,private dialogref: MatDialogRef<AddEtudiantFormComponent>, private toastr: ToastrService){}
  insertData(){
    this.etudiantService.AddEtudiant(this.etudiant).subscribe(res=>{
      console.log(res);   
     
      this.dialogref.close();  
      this.dialogref.afterClosed().subscribe(() => {
        location.reload()
    
    })
  
    })
    this.toastr.success('Registered successfully') 
  }}
