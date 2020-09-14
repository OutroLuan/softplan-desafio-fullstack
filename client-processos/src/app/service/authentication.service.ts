import { Injectable } from '@angular/core';
import {HttpClientService, Usuario} from './http-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  tipoUsuario: string;

  constructor(private httpClient: HttpClientService) { }

   async authenticate(username, password) {
    await this.httpClient.getUsuarioLogin(username, password).then(
      response => { this.tipoUsuario = response; }
    );
    if (this.tipoUsuario) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('tipoUsuario', this.tipoUsuario);
      return this.tipoUsuario;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('tipoUsuario');
  }

  role() {
    const tipoUsuario = sessionStorage.getItem('tipoUsuario');
    return tipoUsuario;
  }
}
