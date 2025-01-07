import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrl;  

  constructor() { }

  login(data:LoginRequest){
    
  }
}
