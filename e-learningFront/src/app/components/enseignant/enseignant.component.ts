import { DetailsEnseignantComponent } from './../model/details-enseignant/details-enseignant.component';
import { AddEnseignantComponent } from './../model/add-enseignant/add-enseignant.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Enseignant } from 'src/app/class/enseignant';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { UpdateEnseignantComponent } from '../model/update-enseignant/update-enseignant.component';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignant:any;
  enseignants=new Enseignant;
  page:number=1; 
  ngOnInit(): void {
    this.getEnseignantData();
  }
  constructor(private enseignantService:EnseignantService,private _dialog:MatDialog){

  }
  getEnseignantData(){
    console.log('liste des enseignants');
    this.enseignantService.getenseignant().subscribe(res=>{
      console.log(res);
      this.enseignant=res;
   
    })
    }
    deleteEnseignant(id:any){
      console.log(id);
      this.enseignantService.deleteEnseignant(id).subscribe(res=>{
        // console.log(res);
        this.getEnseignantData();
    
      })}
      openAddForm(){
        this._dialog.open(AddEnseignantComponent)
  
      }
      openEditForm(data:any){
        this._dialog.open(UpdateEnseignantComponent,{data})
  
      }
      openDetailsForm(data:any){
        this._dialog.open(DetailsEnseignantComponent,{data}) 
      }
}
