import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Cours } from '../class/cours';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpClient:HttpClient) {}
  getCours():Observable<Cours[]>{
    return this.httpClient.get<Cours[]>('http://127.0.0.1:8000/api/cours')

   }
   deleteCours(id:any){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/cours/deleteCours/`+id)
   }
   UpdateCours(id:any,data:Cours){
    return this.httpClient.put(`http://127.0.0.1:8000/api/cours/updateCours/`+id,data)
   }
   AddCours(data:Cours){
    return this.httpClient.post(`http://127.0.0.1:8000/api/cours/addCour`,data)
   }
   getByCoursId(id:any){
    return this.httpClient.get(`http://127.0.0.1:8000/api/cours/details/`+id)
   }
   getCoursDetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getAllCoursDetails')

   }
   
}
