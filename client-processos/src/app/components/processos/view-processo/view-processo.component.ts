import { Component, OnInit } from '@angular/core';
import {HttpClientService, Parecer, Processo} from '../../../service/http-client.service';

@Component({
  selector: 'app-view-processo',
  templateUrl: './view-processo.component.html',
  styleUrls: ['./view-processo.component.css']
})
export class ViewProcessoComponent implements OnInit {

  processo: Processo;
  pareceres: Parecer[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    const id = window.localStorage.getItem('editProcessoId');
    this.httpClientService.getProcessoById(id.toString()).subscribe( response => {
      this.processo = response;
    });
    this.httpClientService.getParecerByProcessoId(id).subscribe(
      response => { this.pareceres = response; }
    );
  }

  formatarData(data: string) {
    const date = new Date(data);
    return date.toLocaleDateString();
  }
}
