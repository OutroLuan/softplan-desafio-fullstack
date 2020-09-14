import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

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

  // Operações de Processos
  public getProcessos() {
    return this.httpClient.get<Processo[]>(environment.url_processos + '/processo');
  }

  public createProcesso(processo) {
    return this.httpClient.post<Processo>(environment.url_processos + '/processo', processo);
  }

  public deleteProcesso(processo) {
    return this.httpClient.delete<Processo>(environment.url_processos + '/processo' + '/' + processo.id.toString());
  }

  public updateProcesso(processo) {
    return this.httpClient.put<Processo>(environment.url_processos + '/processo', processo);
  }

  // Operações de Parecer

  public getParecer() {
    return this.httpClient.get<Parecer[]>(environment.url_processos + '/parecer');
  }

  public createParecer(parecer) {
    return this.httpClient.post<Parecer>(environment.url_processos + '/parecer', parecer);
  }

  public deleteParecer(parecer) {
    return this.httpClient.delete<Parecer>(environment.url_processos + '/parecer' + '/' + parecer.id.toString());
  }

  public updateParecer(parecer) {
    return this.httpClient.put<Parecer>(environment.url_processos + '/parecer', parecer);
  }
}


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

export class Processo {
  constructor(
    public id: number,
    public descricao: string,
    public nome: string,
    public dataInclusao: string
  ) {}
}

export class Parecer {
  constructor(
    public id: number,
    public usuario: Usuario,
    public parecer: string,
    public processo: Processo,
    public dataInclusao: string
  ) {}
}
