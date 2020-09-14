import { Component, OnInit } from '@angular/core';
import {HttpClientService, Usuario} from '../../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
    this.httpClientService.getUsuarios().subscribe(
      response => { this.usuarios = response; }
    );
  }

  deleteUsuario( usuario: Usuario ): void {
    this.httpClientService.deleteUsuario(usuario).subscribe( data => {
      this.usuarios = this.usuarios.filter( u => u !== usuario);
    });
  }

  irParaEditar(id): void {
    this.router.navigate(['usuario', id.toString()]);
  }

}
