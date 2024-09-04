import { FormBuilder, FormGroup } from '@angular/forms';
import { Etudiant } from 'src/app/class/etudiant';
import { Component, Inject, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {
  
  id:any;
  etudiants:any;
  etudiant=new Etudiant;
  empForm: FormGroup;
  file!:File;
  
  constructor(private etudiantService:EtudiantService, private _fb: FormBuilder,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<DetailsEtudiantComponent>
    ){
      this.empForm = this._fb.group({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        class:'',
        teleN:'',
        birthday:'',
        image:''
      });
    }
    getEtudiantById(){
      console.log('liste des enseignants');
      this.etudiantService.getEtudiantById(this.data).subscribe(res=>{
        console.log("res:",res);
        this.etudiants=res;
     
      })
      }
    
  ngOnInit(): void {
    this.getEtudiantById();
   
    
  }
  colosDialoge(){
    this.dialogref.close();
  }

}
