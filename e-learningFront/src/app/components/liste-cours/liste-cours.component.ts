import { Categorie } from './../../class/categorie';
import { CoursService } from 'src/app/service/cours.service';
import { Cours } from './../../class/cours';
import { Component } from '@angular/core';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {
  data:any;
  listecours:any;
  course:any[]=[];
  coursf:any;
  categorie:Categorie[]=[];
  x:string='';
  listecategorie:any;
  page:number=1; 
  
  constructor(private coursService:CoursService,private categorieService:CategorieService,){}
  ngOnInit(): void {
    this.getCoursData();
    this.getCategorieData();
    
  }
  getCoursData(){
    console.log('liste des enseignants');
    this.coursService.getCoursDetails().subscribe(res=>{
      console.log(res);
      this.listecours=res;
      this.data=this.listecours.courses;
      this.coursf=this.listecours.courses;
      console.log(this.data);
     
      this.course=this.data;
    
      
     
      
  
    })
    }
    getCategorieData(){
      console.log('liste des enseignants');
      this.categorieService.getCategorie().subscribe(res=>{
        console.log(res);
  
        this.listecategorie=res;
     
      })
      }
    filtrer(a:string){
      return this.course.filter(x=>x.name.indexOf(a)!=-1)}
set text(a:string){
  this.coursf=this.filtrer(a);
  this.page=1;
    }
    categ(id :number){
     return this.course.filter(elt=>elt.categorie[0].id==id)
    }
    selectedCategorie(a:string){
      this.coursf=this.categ(6)
      this.x=a;
      console.log(this.coursf);
      
    
      this.page=1;

    }
}
