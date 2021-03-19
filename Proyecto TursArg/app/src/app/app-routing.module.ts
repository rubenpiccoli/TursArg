import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ChatComponent } from './components/chat/chat.component';
import { ForoComponent } from './components/foro/foro.component';
import { ItinerariosComponent } from './components/itinerarios/itinerarios.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes =
  [
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Ciudades', component: CiudadesComponent },
    { path: 'Atracciones', component: AtraccionesComponent },
    { path: 'Itinerarios', component: ItinerariosComponent },
    { path: 'Foro', component: ForoComponent },
    { path: 'Chat', component: ChatComponent },
    { path: 'registerUser', component: UsuariosComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
