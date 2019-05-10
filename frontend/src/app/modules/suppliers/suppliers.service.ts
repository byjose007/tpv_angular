import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  endpoint = 'suppliers';
  url = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/${this.endpoint}`, data)
      
  }

  update(data: any): Observable<any> {
    return this.httpClient
      .put<any>(`${this.url}/${this.endpoint}/${data.id}`, data);
      
  }

  get(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${this.endpoint}/${id}`);
      
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/${this.endpoint}`);
     
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`);
  }

  // list(parentId: number, queryOptions: QueryOptions): Observable<T[]> {
  //   return this.httpClient
  //   .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}?${queryOptions.toQueryString()}`);
  
  // }
}

