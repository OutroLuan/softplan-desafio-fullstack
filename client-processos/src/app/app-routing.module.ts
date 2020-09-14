import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './components/usuarios/usuario/usuario.component';
import {AppComponent} from './app.component';
import {AddUsuarioComponent} from './components/usuarios/add-usuario/add-usuario.component';
import {ProcessoComponent} from './components/processos/processo/processo.component';
import {AddProcessoComponent} from './components/processos/add-processo/add-processo.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent},
  { path: 'addUsuario', component: AddUsuarioComponent},
  { path: 'processos', component: ProcessoComponent },
  { path: 'addProcessos', component: AddProcessoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
