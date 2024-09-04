import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Enseignant } from '../class/enseignant';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private httpClient:HttpClient) {}
  getenseignant(){
    return this.httpClient.get('http://127.0.0.1:8000/api/enseignant')

   }
   deleteEnseignant(id:any){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/enseignant/deleteEnseignant/`+id)
   }
   AddEnseignant(data:Enseignant){
    return this.httpClient.post(`http://127.0.0.1:8000/api/enseignant/signup`,data)
   }
   UpdateEnseignant(id:any,file:FormData){
    return this.httpClient.post(`http://127.0.0.1:8000/api/enseignant/updateEnseignant/`+id,file)
   }
   getEnseignantById(id:any){
    return this.httpClient.get(`http://127.0.0.1:8000/api/enseignant/`+id)
   }
}
