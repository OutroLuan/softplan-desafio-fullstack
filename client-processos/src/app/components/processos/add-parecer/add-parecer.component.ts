import { Component, OnInit } from '@angular/core';
import {HttpClientService, Parecer, Processo, Usuario} from '../../../service/http-client.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-add-parecer',
  templateUrl: './add-parecer.component.html',
  styleUrls: ['./add-parecer.component.css']
})
export class AddParecerComponent implements OnInit {

  processo: Processo;
  usuario: Usuario = new Usuario(null, null, null, null, null, null, null);
  parecer: Parecer = new Parecer(null, null, '', null, '');

  constructor(private httpClientService: HttpClientService, private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
    const id = window.localStorage.getItem('editProcessoId');
    this.httpClientService.getProcessoById(id.toString()).subscribe( response => {
      this.processo = response;
    });
  }

  createParecer(): void {
    const usuarioId = this.loginService.getUsuarioId();
    this.usuario.id = parseInt(usuarioId, 10);
    this.parecer.processo = this.processo;
    this.parecer.usuario = this.usuario;
    this.httpClientService.createParecer(this.parecer).subscribe(data => {
        this.router.navigate(['processos']);
      });
  }

}
