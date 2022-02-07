import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthenticationService {
  // URL BACKEND
  baseURL: string = 'http://localhost:3001/';

  constructor(private httpClient: HttpClient) {}

  getTest(): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    const httpOptions = {
      headers: headers,
    };
    return this.httpClient.get<any>(`${this.baseURL}api/users`, httpOptions);
  }

  loginUser(params: any): Observable<any> {
    return this.httpClient.post<any[]>(`${this.baseURL}login`, params);
  }
}
