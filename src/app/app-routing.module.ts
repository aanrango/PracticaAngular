import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { EstadiosComponent } from './componentes/estadios/estadios.component';
import { HomeComponent } from './componentes/home/home.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { RegistroEquipoComponent } from './componentes/registro-equipo/registro-equipo.component';
import { RegistroEstadioComponent } from './componentes/registro-estadio/registro-estadio.component';
import { RegistroJugadorComponent } from './componentes/registro-jugador/registro-jugador.component';
import { RegistroPaisComponent } from './componentes/registro-pais/registro-pais.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path:'jugadores', 
    component: JugadoresComponent
  },
  {
    path:'registro-jugador',
    component: RegistroJugadorComponent
  },
  {
    path:'equipos',
    component: EquiposComponent
  },
  {
    path:'registro-equipos',
    component: RegistroEquipoComponent
  },
  {
    path:'paises',
    component: PaisesComponent
  },
  {
    path:'registro-pais',
    component: RegistroPaisComponent
  },
  {
    path:'estadios',
    component: EstadiosComponent
  },
  {
    path:'registro-estadio',
    component: RegistroEstadioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
