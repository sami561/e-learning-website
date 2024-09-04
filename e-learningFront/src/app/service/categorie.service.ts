import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient:HttpClient) { }
  getCategorie(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categorie')

   }
   deleteCategorie(id:any){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/categorie/deleteCategorie/`+id)
   }
   public addCategorie(file:FormData):Observable<any>{
    //let header=new HttpHeaders(e)
    return this.httpClient.post<any>(`http://127.0.0.1:8000/api/categorie/addCategorie`,file)//,file,{ headers:header})
  }
  getByCategorieId(id:any){
    return this.httpClient.get(`http://127.0.0.1:8000/api/categorie/`+id)
   }
}
