import { ConsultasMailService } from 'src/app/services/consultas-mail.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetClimaComponent } from './components/widget-clima/widget-clima.component';
import { DashAdminComponent } from './components/dashboard-admin/dash-admin/dash-admin.component';
import { ModificacionusuariosComponent } from './components/modificacionusuarios/modificacionusuarios.component';
import { EmailUnicoDirective } from './validations/email-unico.directive';
import { EmailValidatorDirective } from './validations/email-validator.directive';
import { FiltroCiudadPipe } from './pipes/filtro-ciudad.pipe';
import { CiudadesService } from './services/ciudades.service';
import { ModificarCiudadComponent } from './components/modificar-ciudad/modificar-ciudad.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CodpostUnicoDirective } from './validations/codpost-unico.directive';
import { TemaDeForoService } from './services/tema-de-foro.service';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ConsultasDashboardComponent } from './components/consultas-dashboard/consultas-dashboard.component';
import { PublicacionesService } from './services/publicaciones.service';
import { CookieService } from 'ngx-cookie-service';
import { TemplateConstruccionComponent } from './components/template-construccion/template-construccion.component';





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
    //UsuariosComponent,
    EmailUnicoDirective,
    EmailValidatorDirective,
    WidgetClimaComponent,
    DashAdminComponent,
    ModificacionusuariosComponent,
    FiltroCiudadPipe,
    ModificarCiudadComponent,
    CodpostUnicoDirective,
    PublicacionesComponent,
    ConsultasDashboardComponent,
    TemplateConstruccionComponent,


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [CookieService,UsuariosService, CiudadesService, TemaDeForoService, ConsultasMailService, PublicacionesService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
