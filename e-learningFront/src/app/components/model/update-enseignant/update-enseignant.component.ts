import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/class/enseignant';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
  id:any;
  enseignant=new Enseignant;
  empForm: FormGroup;
  file!:File;
  
  constructor(private enseignantService:EnseignantService,private route:ActivatedRoute,private router:Router, private _fb: FormBuilder,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<UpdateEnseignantComponent>
    ){
      this.empForm = this._fb.group({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        teleN:'',
        birthday:'',
        ratings:'',
        image:''
      });
    }
    
  ngOnInit(): void {
  this.empForm.patchValue(this.data);
  this.enseignant=this.data;
  this.id=this.data.id;
    console.log(this.data)
    console.log(this.data.id)
  }
  updateData(f:NgForm){
    console.log(f);
    let fd = new FormData();
    let etudiant:Enseignant=f.value;
    fd.append("image",this.file);

    fd.append("data",JSON.stringify(etudiant))
    console.log(fd)
    console.log('liste des enseignant');
    this.enseignantService.UpdateEnseignant(this.id,fd).subscribe(res=>{
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
