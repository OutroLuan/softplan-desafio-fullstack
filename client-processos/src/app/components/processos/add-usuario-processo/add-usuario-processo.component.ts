import { Component, OnInit } from '@angular/core';
import {HttpClientService, Processo, Usuario, UsuarioProcesso} from '../../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-usuario-processo',
  templateUrl: './add-usuario-processo.component.html',
  styleUrls: ['./add-usuario-processo.component.css']
})
export class AddUsuarioProcessoComponent implements OnInit {

  processo: Processo;
  usuarios: Usuario[];
  responsavel: UsuarioProcesso;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
    const id = window.localStorage.getItem('editProcessoId');
    this.httpClientService.getProcessoById(id.toString()).subscribe( response => {
      this.processo = response;
    });
    this.httpClientService.getUsuariosByTipoUsuario('FINALIZADOR').subscribe(
      response => { this.usuarios = response; }
    );
  }

  atribuirUsuario( usuario: Usuario ) {
    this.responsavel = new UsuarioProcesso(null, usuario, this.processo, null);
    this.httpClientService.createUsuarioProcesso(this.responsavel).subscribe( data => {
      this.usuarios = this.usuarios.filter( u => u !== usuario);
    });
  }

  formatarData(data: string) {
    const date = new Date(data);
    return date.toLocaleDateString();
  }
}
