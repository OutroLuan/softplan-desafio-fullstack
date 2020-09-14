import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
  }

   async checkLogin() {
    const tipoUsuario = await this.loginService.authenticate(this.username, this.password);
    if (tipoUsuario) {
      if (tipoUsuario === 'ADMINISTRADOR') {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['processos']);
      }
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
