import { CategorieService } from './../../../service/categorie.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-categorie',
  templateUrl: './details-categorie.component.html',
  styleUrls: ['./details-categorie.component.css']
})
export class DetailsCategorieComponent implements OnInit{
  id:any;
  categorie:any;
  


  
  constructor(private categorietService:CategorieService,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<DetailsCategorieComponent>
    ){  
     
    }

  getcategorieById(){
    console.log('liste des enseignants');
    this.categorietService.getByCategorieId(this.data).subscribe(res=>{
      console.log("res:",res);
      this.categorie=res;
   
    })
    }
  
ngOnInit(): void {
  this.getcategorieById();
 
  
}
colosDialoge(){
  this.dialogref.close();
}
}
