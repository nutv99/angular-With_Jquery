import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environment';
import { Emp } from '../_models/emp';

const baseUrl = environment.apiUrl  ;

@Injectable({
  providedIn: 'root',
})

export class APIService {
  constructor(private http: HttpClient) {}

  // httpOptions = {
  //     headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         "Access-Control-Allow-Origin": "*"
  //     }), responseType: 'text' as 'json'
  // };

  httpOptions = {};

  getAll() {
    return this.http.get<any>(baseUrl);
  }

  getById(modelName:string,id: number) {
    let lang  = 'th' ;
    return this.http.get<any>(`${baseUrl}/${lang}/${modelName}/BySelf/${id}`);
  }

  
  getByPageNo(id: number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  getByParentID(id: number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  getByChild(id: number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  getByChildren(id: number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  // params คือ  payload
  create(params: any) {
    return this.http.post(baseUrl, params, this.httpOptions);
  }

  update(params: any) {
    return this.http.put(`${baseUrl}`, params, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`, this.httpOptions);
  }
}
