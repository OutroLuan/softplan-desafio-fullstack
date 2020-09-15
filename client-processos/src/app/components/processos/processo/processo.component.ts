import { Component, OnInit } from '@angular/core';
import {HttpClientService, Processo} from '../../../service/http-client.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  processos: Processo[];

  constructor(private httpClientService: HttpClientService, private loginService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.role() === 'TRIADOR') {
      this.httpClientService.getProcessos().subscribe(
        response => {
          this.processos = response;
        });
    } else {
      this.httpClientService.getProcessosByUsuarioId(this.loginService.getUsuarioId()).subscribe(
        response => {
          this.processos = response;
        });
    }
  }

  irParaAtribuirResponsavel(id): void {
    window.localStorage.removeItem('editProcessoId');
    window.localStorage.setItem('editProcessoId', id.toString());
    this.router.navigate(['processos/' + id.toString() + '/addUsuarioProcesso']);
  }

  irParaAdicionarParecer(id): void {
    window.localStorage.removeItem('editProcessoId');
    window.localStorage.setItem('editProcessoId', id.toString());
    this.router.navigate(['processos/' + id.toString() + '/addParecer']);
  }

  irParaVisualizar(id): void {
    window.localStorage.removeItem('editProcessoId');
    window.localStorage.setItem('editProcessoId', id.toString());
    this.router.navigate(['processos/' + id.toString() + '/visualizar']);
  }

  formatarData(data: string) {
    const date = new Date(data);
    return date.toLocaleDateString();
  }

}
