import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { HeaderComponent } from './components/pagina/header/header.component';
import { FooterComponent } from './components/pagina/footer/footer.component';
import { ProcessoComponent } from './components/processos/processo/processo.component';
import { AddProcessoComponent } from './components/processos/add-processo/add-processo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AddUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    ProcessoComponent,
    AddProcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
