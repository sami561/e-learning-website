import { AddCoursComponent } from './../model/add-cours/add-cours.component';
import { CoursService } from './../../service/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/class/cours';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCoursComponent } from '../model/update-cours/update-cours.component';
import { DetailsCoursComponent } from '../model/details-cours/details-cours.component';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  listecours:any;
  cours=new Cours
  page:number=1; 
  constructor(private coursService:CoursService,private _dialog:MatDialog){}
  ngOnInit(): void {
    this.getCoursData();
    
  }
  getCoursData(){
    console.log('liste des enseignants');
    this.coursService.getCours().subscribe(res=>{
      console.log(res);
      this.listecours=res;
   
    })
    }
    deleteData(id:any){
      console.log(id);
      this.coursService.deleteCours(id).subscribe(res=>{
        // console.log(res);
        this.getCoursData();
    
      })
  
    }
    openAddForm(){
      this._dialog.open(AddCoursComponent)

    }
    openEditForm(data:any){
      this._dialog.open(UpdateCoursComponent,{data})

    }
    openDetailsForm(data:any){
      this._dialog.open(DetailsCoursComponent,{data}) 
    }

}
