import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './components/usuarios/usuario/usuario.component';
import {AppComponent} from './app.component';
import {AddUsuarioComponent} from './components/usuarios/add-usuario/add-usuario.component';
import {ProcessoComponent} from './components/processos/processo/processo.component';
import {AddProcessoComponent} from './components/processos/add-processo/add-processo.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {EditUsuarioComponent} from './components/usuarios/edit-usuario/edit-usuario.component';
import {AddUsuarioProcessoComponent} from './components/processos/add-usuario-processo/add-usuario-processo.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent, canActivate: [AuthGuardService]},
  { path: 'addUsuario', component: AddUsuarioComponent, canActivate: [AuthGuardService]},
  { path: 'processos', component: ProcessoComponent, canActivate: [AuthGuardService] },
  { path: 'addProcessos', component: AddProcessoComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'usuario/:id', component: EditUsuarioComponent, canActivate: [AuthGuardService] },
  { path: 'processos/:id/addUsuarioProcesso', component: AddUsuarioProcessoComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
