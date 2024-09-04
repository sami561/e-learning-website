import { CategorieService } from './../../service/categorie.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategorieComponent } from '../model/add-categorie/add-categorie.component';
import { DetailsCategorieComponent } from '../model/details-categorie/details-categorie.component';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent  implements OnInit{
  listecategorie:any;
  ngOnInit(): void {
    this.getCategorieData();
    
  }
  page:number=1; 
  constructor(private categorieService:CategorieService,private _dialog:MatDialog){}

  getCategorieData(){
    console.log('liste des enseignants');
    this.categorieService.getCategorie().subscribe(res=>{
      console.log(res);

      this.listecategorie=res;
   
    })
    }
    deleteData(id:any){
      console.log(id);
      this.categorieService.deleteCategorie(id).subscribe(res=>{
        // console.log(res);
        this.getCategorieData ();
    
      })
  
    }
    openAddForm(){
      this._dialog.open(AddCategorieComponent)

    }
    openDetailsForm(data:any){
      this._dialog.open(DetailsCategorieComponent,{data}) 
    }
}
