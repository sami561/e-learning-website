import { Cours } from 'src/app/class/cours';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursService } from 'src/app/service/cours.service';
import { Categorie } from 'src/app/class/categorie';

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit{
  id:any;
  res:any;
  name:any;
  etudiant:any;
  enseignant:any;
   categorie =new Categorie;
   
  
  constructor(private coursService:CoursService,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<DetailsCoursComponent>
    ){  
     
    }
    getcoursById(){
      console.log('liste des enseignants');
      this.coursService.getByCoursId(this.data).subscribe(res=>{
        
        this.res=res;
        
        this.name=this.res.cours.name;
        this.etudiant=this.res.cours.etudiant[0];
        this.enseignant=this.res.cours.enseignant[0];
        this.categorie=this.res.cours.categorie[0];
        
        console.log("res:",this.res.cours);
        console.log("etudiant:",this.etudiant);
        console.log("enseignant:",this.enseignant);
        console.log("categorie:",this.categorie);
      })
      }
    
  ngOnInit(): void {
    this.getcoursById();
    const categoryName = this.res.cours.categorie[0].name;
    console.log("categoryName:",categoryName);
    
  }
  colosDialoge(){
    this.dialogref.close();
  }
}
