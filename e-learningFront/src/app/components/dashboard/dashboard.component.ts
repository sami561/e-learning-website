import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  title = 'front';
  constructor(){}
  image:any;
  firstname:any;
  role:any;
  ngOnInit(): void {
  
    this.image=localStorage.getItem('image');
    this.firstname=localStorage.getItem('firstname');
    this.role=localStorage.getItem('role');
   
  console.log(this.image);
  console.log(this.firstname);
  }
  //Sidebar toggle show hide function
status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
