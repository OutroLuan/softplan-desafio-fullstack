import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { HeaderComponent } from './pagina/header/header.component';
import { FooterComponent } from './pagina/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AddUsuarioComponent,
    HeaderComponent,
    FooterComponent
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
