import { Component, OnInit } from '@angular/core';
import {HttpClientService, Usuario} from '../../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario(null, '', '', '', '', '', '');

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  createUsuario(): void {
    this.httpClientService.createUsuarios(this.usuario).subscribe( data => {
      this.router.navigate(['']);
    });
  }
}
