import { Component, OnInit } from '@angular/core';
import {HttpClientService, Processo} from '../../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-processo',
  templateUrl: './add-processo.component.html',
  styleUrls: ['./add-processo.component.css']
})
export class AddProcessoComponent implements OnInit {

  processo: Processo = new Processo(null, '', '', '');

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  createProcesso(): void {
    this.httpClientService.createProcesso(this.processo).subscribe( data => {
      this.router.navigate(['processos']);
    });
  }

}
