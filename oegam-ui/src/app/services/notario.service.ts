import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Notario } from '../models/notario';

@Injectable()
export class NotarioService {

  private serviceUrl = 'http://localhost:8090/api/notarios/';

  constructor(private http: HttpClient) { }

  getNotarios(): Promise<any> {
    return this.http.get<Notario[]>(this.serviceUrl).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}
