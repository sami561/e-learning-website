import { CoursService } from 'src/app/service/cours.service';
import { CategorieComponent } from './../../categorie/categorie.component';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Cours } from 'src/app/class/cours';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent  implements OnInit{
  etudiant:any;
  enseignant:any;
  listecategorie:any;
  cours=new Cours;
  ngOnInit(): void {
    this.getEtudiantData();
    this.getEnseignantData();
    this.getCategorieData();
  }
  constructor(private etudiantService:EtudiantService,private enseignantService:EnseignantService,private categorieService:CategorieService,private dialogref: MatDialogRef<AddCoursComponent>,private coursService:CoursService){

  }
  getEtudiantData(){
    console.log('liste des etudiants');
    this.etudiantService.getetudiant().subscribe(res=>{
      console.log(res);
      this.etudiant=res;
   
    })
    }
    getEnseignantData(){
      console.log('liste des enseignants');
      this.enseignantService.getenseignant().subscribe(res=>{
        console.log(res);
        this.enseignant=res;
     
      })
      }
      getCategorieData(){
        console.log('liste des enseignants');
        this.categorieService.getCategorie().subscribe(res=>{
          console.log(res);
    
          this.listecategorie=res;
       
        })
        }
        insertData(){
          this.coursService.AddCours(this.cours).subscribe(res=>{
            console.log(res);    
            this.dialogref.close();
            this.dialogref.afterClosed().subscribe(() => {
              location.reload()
            });
          })
        }
}
