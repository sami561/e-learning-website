import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Enseignant } from 'src/app/class/enseignant';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-details-enseignant',
  templateUrl: './details-enseignant.component.html',
  styleUrls: ['./details-enseignant.component.css']
})
export class DetailsEnseignantComponent {
  
  enseignants:any;
  


  
  constructor(private enseignantService:EnseignantService,
 @Inject(MAT_DIALOG_DATA) private data: any, private dialogref: MatDialogRef<DetailsEnseignantComponent>
    ){  
     
    }
    getEnseignantById(){
      console.log('liste des enseignants');
      this.enseignantService.getEnseignantById(this.data).subscribe(res=>{
        console.log("res:",res);
        this.enseignants=res;
     
      })
      }
    
  ngOnInit(): void {
    this.getEnseignantById();
   
    
  }
  colosDialoge(){
    this.dialogref.close();
  }
}
