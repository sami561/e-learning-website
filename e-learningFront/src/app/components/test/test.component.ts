import { Cours } from 'src/app/class/cours';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Categorie } from 'src/app/class/categorie';
import { CoursService } from 'src/app/service/cours.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  dataSource!: MatTableDataSource<Cours>;
  public cours: Cours[]=[];
  cour:any;
  

  constructor(private coursService:CoursService){}
  ngOnInit(): void {
    this.getCoursData();
    
  }
  displayedColumns: string[] = ['id', 'name', 'enseignant_id',  'nombre_etudiant',  'etudiant_id', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  getCoursData(){
    console.log('liste des enseignants');
    this.coursService.getCours().subscribe({
      next: (res) => {
        this.cours = res;
        console.log(this.cour);
        this.dataSource = new MatTableDataSource(this.cours);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
