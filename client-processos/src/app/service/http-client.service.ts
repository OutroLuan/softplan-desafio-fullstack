import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

export class Usuario {
  constructor(
    public id: number,
    public login: string,
    public senha: string,
    public nome: string,
    public email: string,
    public tipoUsuario: string,
    public dataInclusao: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient: HttpClient) { }

  // Operações de Usuarios
  public getUsuarios() {
    return this.httpClient.get<Usuario[]>(environment.url_processos + '/usuario');
  }

  public createUsuarios(usuario) {
    return this.httpClient.post<Usuario>(environment.url_processos + '/usuario', usuario);
  }

  public deleteUsuario(usuario) {
    return this.httpClient.delete<Usuario>(environment.url_processos + '/usuario' + '/' + usuario.id.toString());
  }

  public updateUsuario(usuario) {
    return this.httpClient.put<Usuario>(environment.url_processos + '/usuario', usuario);
  }
}
