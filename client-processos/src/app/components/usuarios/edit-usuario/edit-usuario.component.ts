import { Component, OnInit } from '@angular/core';
import {HttpClientService, Usuario} from '../../../service/http-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  constructor(private httpClientService: HttpClientService, private router: Router, private route: ActivatedRoute) { }

  usuario: Usuario;

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.httpClientService.getUsuarioById(id).then(response => {
      this.usuario = response;
    });
  }

  updateUsuario(): void {
    this.httpClientService.updateUsuario(this.usuario).subscribe( data => {
      this.router.navigate(['']);
    });
  }
}
