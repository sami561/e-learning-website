import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Etudiant } from '../class/etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient:HttpClient) {}
   getetudiant(){
    return this.httpClient.get('http://127.0.0.1:8000/api/etudiant')

   }
   getetudiantById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/etudiant'+id)

   }
   deleteEtudiant(id:any){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/etudiant/deleteEtudiant/`+id)
   }
   UpdateEtudiant(id:any,file:FormData){
    return this.httpClient.post(`http://127.0.0.1:8000/api/etudiant/updateEtudiant/`+id,file)
   }
   getEtudiantById(id:any){
    return this.httpClient.get(`http://127.0.0.1:8000/api/etudiant/`+id)
   }
   AddEtudiant(data:Etudiant){
    return this.httpClient.post(`http://127.0.0.1:8000/api/etudiant/signup`,data)
   }
 
}
