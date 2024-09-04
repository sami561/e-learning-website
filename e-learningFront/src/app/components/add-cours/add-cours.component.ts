import { CoursService } from 'src/app/service/cours.service';
import { Cours } from 'src/app/class/cours';
import { CategorieService } from 'src/app/service/categorie.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit{
  image:any;
  firstname:any;
  etudiant:any;
  enseignant:any;
  listecategorie:any;
  cours=new Cours;
  constructor(private etudiantService:EtudiantService,private enseignantService:EnseignantService,private categorieService:CategorieService,private coursService:CoursService){}
  ngOnInit(): void {
  
    this.image=localStorage.getItem('image');
    this.firstname=localStorage.getItem('firstname');
   this.getCategorieData();
   this.getEnseignantData();
   this.getEtudiantData();
   
  console.log(this.image);
  console.log(this.firstname);
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
           
        
          })
        }
}
