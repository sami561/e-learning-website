import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/class/enseignant';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent {

  public hide: boolean = false;
  enseignants:any;
  enseignant=new Enseignant;
  ngOnInit(): void {
    
  }
  constructor(private enseignantService:EnseignantService,private router:Router,private dialogref: MatDialogRef<AddEnseignantComponent>,private toastr: ToastrService){}
  insertData(){
    this.enseignantService.AddEnseignant(this.enseignant).subscribe(res=>{
      console.log(res);    
      this.dialogref.close();
      this.dialogref.afterClosed().subscribe(() => {
        location.reload()
    
    })
    })
    this.toastr.warning('Please enter valid data.')
  }
}
