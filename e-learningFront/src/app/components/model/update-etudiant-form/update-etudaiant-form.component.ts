import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/class/etudiant';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-update-etudaiant-form',
  templateUrl: './update-etudaiant-form.component.html',
  styleUrls: ['./update-etudaiant-form.component.css']
})
export class UpdateEtudaiantFormComponent implements OnInit {
  id:any;
  etudiant=new Etudiant;
  empForm: FormGroup;
  file!:File;
  
  constructor(private etudiantService:EtudiantService,private route:ActivatedRoute,private router:Router, private _fb: FormBuilder,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<UpdateEtudaiantFormComponent>
    ){
      this.empForm = this._fb.group({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        class:'',
        teleN:'',
        birthday:'',
        image:''
      });
    }
    
  ngOnInit(): void {
  this.empForm.patchValue(this.data);
  this.etudiant=this.data;
  this.id=this.data.id;
    console.log(this.data)
    console.log(this.data.id)
  }
  updateData(f:NgForm){
    console.log(f);
    let fd = new FormData();
    let etudiant:Etudiant=f.value;
    fd.append("image",this.file);

    fd.append("data",JSON.stringify(etudiant))
    console.log(fd)
    console.log('liste des produits');
    this.etudiantService.UpdateEtudiant(this.id,fd).subscribe(res=>{
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
