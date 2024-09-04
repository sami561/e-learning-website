import { Router } from '@angular/router';
import { CategorieService } from './../../../service/categorie.service';
import { Categorie } from './../../../class/categorie';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent  implements OnInit{
  file!:File;

  categorie=new Categorie;
  ngOnInit(): void {
    
  }
  constructor(private categorieService:CategorieService,private router:Router,private dialogref: MatDialogRef<AddCategorieComponent>){}
  save(f:NgForm)
  {
    console.log(f);
    let fd = new FormData();
    let categorie:Categorie=f.value;
    fd.append("image",this.file);

    fd.append("data",JSON.stringify(categorie))
    console.log(categorie)
    this.categorieService.addCategorie(fd).subscribe(res=>{
      console.log(res);    
      this.dialogref.close();
      this.dialogref.afterClosed().subscribe(() => {
        location.reload()
      });
    })
  }
  selectImage(img:any)
  {
    this.file=img.target.files[0]
  }
}
