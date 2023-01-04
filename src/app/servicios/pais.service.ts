import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl="https://localhost:44378/api/paises"
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(baseUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any):Observable<any>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(baseUrl,data, {headers:headers});
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
