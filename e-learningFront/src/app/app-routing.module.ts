import { ListeCoursComponent } from './components/liste-cours/liste-cours.component';
import { RegisterEtudiantComponent } from './components/model/register-etudiant/register-etudiant.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginFormComponent } from './components/model/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestComponent } from './components/test/test.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { CoursComponent } from './components/cours/cours.component';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { HomeDahboardComponent } from './components/home-dahboard/home-dahboard.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterEtudiantComponent},
  { path: 'listeEnseignant', component: AboutUsComponent,  canActivate:[RoleGuard],
  data:{roles:["user"]}},
  { path: 'listeCours', component: ListeCoursComponent, canActivate:[RoleGuard],
  data:{roles:["user"]}},
  { path: 'AddCours', component: AddCoursComponent, canActivate:[RoleGuard],
  data:{roles:["user"]}},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeDahboardComponent },
      { path: 'etudiant', component: EtudiantComponent },
      { path: 'enseignant', component: EnseignantComponent },
      { path: 'cours', component: CoursComponent },
      { path: 'categorie', component: CategorieComponent },
      { path: 'test', component: TestComponent },
    ],
    canActivate:[RoleGuard],
    data:{roles:["admin"]}
  },
 {path: 'home', component: HomeComponent,  canActivate:[RoleGuard],
 data:{roles:["user"]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
