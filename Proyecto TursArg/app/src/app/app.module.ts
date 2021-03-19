import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { ForoComponent } from './components/foro/foro.component';
import { ChatComponent } from './components/chat/chat.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ItinerariosComponent } from './components/itinerarios/itinerarios.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { UsuariosService } from './services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    IndexComponent,
    ForoComponent,
    ChatComponent,
    CiudadesComponent,
    ItinerariosComponent,
    AtraccionesComponent,
    UsuariosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
