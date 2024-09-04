import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoursComponent } from './components/cours/cours.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateEtudaiantFormComponent } from './components/model/update-etudiant-form/update-etudaiant-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEtudiantFormComponent } from './components/model/add-etudiant-form/add-etudiant-form.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AddEnseignantComponent } from './components/model/add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './components/model/update-enseignant/update-enseignant.component';
import { TestComponent } from './components/test/test.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table' ;
import {NgxPaginationModule} from 'ngx-pagination';
import { AddCategorieComponent } from './components/model/add-categorie/add-categorie.component';
import { AddCoursComponent } from './components/model/add-cours/add-cours.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { RegisterEnseignantComponent } from './components/model/register-enseignant/register-enseignant.component';
import { RegisterEtudiantComponent } from './components/model/register-etudiant/register-etudiant.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateCoursComponent } from './components/model/update-cours/update-cours.component';
import { DetailsEtudiantComponent } from './components/model/details-etudiant/details-etudiant.component';
import { DetailsEnseignantComponent } from './components/model/details-enseignant/details-enseignant.component';
import { DetailsCoursComponent } from './components/model/details-cours/details-cours.component';
import { DetailsCategorieComponent } from './components/model/details-categorie/details-categorie.component';
import { LoginFormComponent } from './components/model/login-form/login-form.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListeCoursComponent } from './components/liste-cours/liste-cours.component';
import { HomeDahboardComponent } from './components/home-dahboard/home-dahboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EnseignantComponent,
    CoursComponent,
    UpdateEtudaiantFormComponent,
    AddEtudiantFormComponent,
    CategorieComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent,
    TestComponent,
    AddCategorieComponent,
    AddCoursComponent,
    DashboardComponent,
    LoginComponent,
    RegisterEnseignantComponent,
    RegisterEtudiantComponent,
    UpdateCoursComponent,
    DetailsEtudiantComponent,
    DetailsEnseignantComponent,
    DetailsCoursComponent,
    DetailsCategorieComponent,
    LoginFormComponent,
    UserLayoutComponent,
    HomeComponent,
    AboutUsComponent,
    ListeCoursComponent,
    HomeDahboardComponent,

  
   
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,  
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    
   
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
