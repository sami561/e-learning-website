import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/service/cours.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cours } from 'src/app/class/cours';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit{
  etudiant:any;
  enseignant:any;
  listecategorie:any;
  id:any;
  cours=new Cours;
  empForm: FormGroup;
  file!:File;
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.cours=this.data;
    this.id=this.data.id;
      console.log(this.data)
      console.log(this.data.id);
      this.getEtudiantData();
      this.getEnseignantData();
      this.getCategorieData();
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
  
  constructor(private etudiantService:EtudiantService,private enseignantService:EnseignantService,private categorieService:CategorieService,private CoursService:CoursService,private route:ActivatedRoute,private router:Router, private _fb: FormBuilder,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<UpdateCoursComponent>,  private toastr: ToastrService)
 {
  this.empForm = this._fb.group({
    name:'',
    enseignant_id:'',
    etudiant_id:'',
    nombre_etudiant:'',
    date:'',
    categorie_id:'',
  });
}
updateData(){
  console.log('liste des produits');
  this.CoursService.UpdateCours(this.id,this.cours).subscribe(res=>{
    this.dialogref.close();
    this.dialogref.afterClosed().subscribe(() => {
      location.reload()
    });
    this.toastr.warning('Please enter valid data.')

  })
}
}
