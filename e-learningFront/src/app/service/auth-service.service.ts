import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient) { }
  login(data:any){
    return this.httpClient.post<any>(`http://localhost:8000/api/login`,data)
   }
   IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  haveRoleAccess(){
   let role=localStorage.getItem('role');
  /* if(role=='admin'){
return true;
   }
   alert('you  dont have the access');
   return false;*/
   return role
  
  }
}
