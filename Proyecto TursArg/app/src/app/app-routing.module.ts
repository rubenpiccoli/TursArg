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
//import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegisterComponent } from './components/register/register.component';
import { ModificarCiudadComponent } from './components/modificar-ciudad/modificar-ciudad.component';
import { DashAdminComponent } from './components/dashboard-admin/dash-admin/dash-admin.component';
import { ConsultasDashboardComponent } from './components/consultas-dashboard/consultas-dashboard.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import{AuthGuard} from './guards/auth.guard';
import { TemplateConstruccionComponent } from './components/template-construccion/template-construccion.component';

const routes: Routes =
  [
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Ciudades', component: CiudadesComponent, canActivate:[AuthGuard] },
    { path: 'Atracciones', component: AtraccionesComponent },
    { path: 'Itinerarios', component: ItinerariosComponent },
    { path: 'Foro', component: ForoComponent },
    { path: 'Contacto', component: ChatComponent },
    { path: 'registerUser', component: RegisterComponent },
    { path: 'modiCiudad', component: ModificarCiudadComponent },
    { path: 'dashboard', component: DashAdminComponent, canActivate:[AuthGuard] },
    { path: 'ConsultasDash', component: ConsultasDashboardComponent,canActivate:[AuthGuard] },
    { path: 'publicaciones/:id/:TEMA/:idUser', component:PublicacionesComponent},
    { path: 'enConstruccion', component: TemplateConstruccionComponent },

    { path: '**', redirectTo: 'index' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
