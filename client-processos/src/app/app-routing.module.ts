import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';
import {AppComponent} from './app.component';
import {AddUsuarioComponent} from './usuarios/add-usuario/add-usuario.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent},
  { path: 'addUsuario', component: AddUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
