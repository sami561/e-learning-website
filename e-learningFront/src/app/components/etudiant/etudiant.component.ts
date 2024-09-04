import { EtudiantService } from './../../service/etudiant.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Etudiant } from 'src/app/class/etudiant';

import { MatDialog } from '@angular/material/dialog';
import { UpdateEtudaiantFormComponent } from '../model/update-etudiant-form/update-etudaiant-form.component';
import { AddEtudiantFormComponent } from '../model/add-etudiant-form/add-etudiant-form.component';
import { DetailsEtudiantComponent } from '../model/details-etudiant/details-etudiant.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiant:any
  page:number=1; 

  constructor(private etudiantService:EtudiantService,private _dialog:MatDialog){

  }
 
  ngOnInit(): void {
    this.getEtudiantData();
   
  }
  getEtudiantData(){
    console.log('liste des etudiants');
    this.etudiantService.getetudiant().subscribe(res=>{
      console.log(res);
      this.etudiant=res;
   
    })
    }
    deleteEtudiant(id:any){
      console.log(id);
      this.etudiantService.deleteEtudiant(id).subscribe(res=>{
        // console.log(res);
        this.getEtudiantData();
    
      })
  
    }
    openEditForm(data:any){
      this._dialog.open(UpdateEtudaiantFormComponent,{data})

    }
    openAddForm(){
      this._dialog.open(AddEtudiantFormComponent);
      

    }
    openDetailsForm(data:any){
      this._dialog.open(DetailsEtudiantComponent,{data}) 
    }
    

}
