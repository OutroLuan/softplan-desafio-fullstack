import { Component, OnInit } from '@angular/core';
import {HttpClientService, Processo} from '../../../service/http-client.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  processos: Processo[];

  constructor(private httpClientService: HttpClientService, private loginService: AuthenticationService) { }

  ngOnInit() {
    this.httpClientService.getProcessos().subscribe(
      response => { this.processos = response; }
    );
  }

}
