import { Injectable } from '@angular/core';
import {HttpClientService, Usuario} from './http-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  usuario: Usuario;

  constructor(private httpClient: HttpClientService) { }

   async authenticate(username, password) {
    await this.httpClient.getUsuarioLogin(username, password).then(
      response => { this.usuario = response; }
    );
    if (this.usuario) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('tipoUsuario', this.usuario.tipoUsuario);
      sessionStorage.setItem('usuarioId', this.usuario.id.toString());
      return this.usuario.tipoUsuario;
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
    sessionStorage.removeItem('usuarioId');
  }

  role() {
    const tipoUsuario = sessionStorage.getItem('tipoUsuario');
    return tipoUsuario;
  }

  getUsuarioId() {
    const id = sessionStorage.getItem('usuarioId');
    return id;
  }
}
