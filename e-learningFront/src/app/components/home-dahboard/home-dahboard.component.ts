import { CoursService } from 'src/app/service/cours.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { Cours } from 'src/app/class/cours';
import { Categorie } from 'src/app/class/categorie';
import { Enseignant } from 'src/app/class/enseignant';
import { Etudiant } from 'src/app/class/etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dahboard',
  templateUrl: './home-dahboard.component.html',
  styleUrls: ['./home-dahboard.component.css']
})
export class HomeDahboardComponent implements OnInit {
  etudiant:any;
  enseignant:any;
  listecategorie:any;
  listecours:any;
  cours:any;
  lenET!:number;
  lenES!:number;
  lenCAT!:number;
  lenCO!:number;
  ngOnInit(): void {
    this.getEtudiantData();
    this.getEnseignantData();
    this.getCategorieData();
    this.getCoursData();
  }
  constructor(private etudiantService:EtudiantService,private enseignantService:EnseignantService,private categorieService:CategorieService,private coursService:CoursService){

  }
  getEtudiantData(){
    console.log('liste des etudiants');
    this.etudiantService.getetudiant().subscribe(res=>{
      console.log(res);
      this.etudiant=res;
      this.lenET=this.etudiant.length;
      console.log(this.lenET);
      
   
    })
    }
    getEnseignantData(){
      console.log('liste des enseignants');
      this.enseignantService.getenseignant().subscribe(res=>{
        console.log(res);
        this.enseignant=res;
        this.lenES=this.enseignant.length;
        console.log(this.lenES);
     
      })
      }
      getCategorieData(){
        console.log('liste des enseignants');
        this.categorieService.getCategorie().subscribe(res=>{
          console.log(res);
    
          this.listecategorie=res;
          this.lenCAT=this.listecategorie.length;
          console.log(this.lenCAT);
       
        })
        }
        getCoursData(){
          console.log('liste des enseignants');
          this.coursService.getCours().subscribe(res=>{
            console.log(res);
      
            this.listecours=res;
            this.lenCO=this.listecours.length;
            console.log(this.lenCO);
         
          })
          }
}
