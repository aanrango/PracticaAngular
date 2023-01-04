import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroJugadorComponent } from './componentes/registro-jugador/registro-jugador.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { RegistroEquipoComponent } from './componentes/registro-equipo/registro-equipo.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { RegistroPaisComponent } from './componentes/registro-pais/registro-pais.component';
import { EstadiosComponent } from './componentes/estadios/estadios.component';
import { RegistroEstadioComponent } from './componentes/registro-estadio/registro-estadio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    HomeComponent,    
    RegistroJugadorComponent, 
    EquiposComponent, RegistroEquipoComponent, PaisesComponent, RegistroPaisComponent, EstadiosComponent, RegistroEstadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
