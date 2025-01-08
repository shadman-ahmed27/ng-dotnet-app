import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getRoled = () : Observable<Role[]> => {
    this.http.get(`${this.apiUrl}role`);
  }
}
