import { Enseignant } from './../../class/enseignant';
import { Component } from '@angular/core';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  imageUrl = '../../../assets/star.png';

  getRatings(rating: number) {
    return Array.from({length: rating}, (_, i) => i);
  }
  page:number=1; 
  enseignant:any;
  enseignants:Enseignant[]=[];
  enseignantf:any;
  numberOfImages :any;
  ngOnInit(): void {
    this.getEnseignantData();
   
  }
  constructor(private enseignantService:EnseignantService){

  }
  getEnseignantData(){
    console.log('liste des enseignants');
    this.enseignantService.getenseignant().subscribe(res=>{
      console.log(res);
      this.enseignant=res;
      this.enseignantf=res
      this.enseignants=this.enseignant;
     
      
   
    })
    }
    filtrer(a:string){return this.enseignants.filter(x=>x.firstname.indexOf(a)!=-1)}
set text(a:string){
  this.enseignantf=this.filtrer(a);
  this.page=1;
}
}
