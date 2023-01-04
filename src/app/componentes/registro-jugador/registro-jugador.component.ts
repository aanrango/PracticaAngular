import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { EquipoService } from 'src/app/servicios/equipo.service';

@Component({
  selector: 'app-registro-jugador',
  templateUrl: './registro-jugador.component.html',
  styleUrls: ['./registro-jugador.component.css']
})
export class RegistroJugadorComponent implements OnInit {

  equipo:Array<any>=[];

  jugador={    
    nombre_jugador:'',
    apellido_jugador:'',
    edad_jugador:'',
    cod_equipo:''
  }

  constructor(private jugadorDB:JugadorService,
              private router: Router,
              private equipos: EquipoService) { }

  ngOnInit(): void {
    this.equipos.getAll().subscribe(res=>{
      this.equipo=res as any[];               
    })  
  }

  crearJugador():void{
    this.jugadorDB.create(this.jugador).subscribe(res=>{
      console.log(res);
      this.jugador={
        nombre_jugador:'',
        apellido_jugador:'',
        edad_jugador:'',
        cod_equipo:''
      }
    });   
    this.navegarJugadores();  
  }

  navegarJugadores():void{
    this.router.navigate(['jugadores']);
  }

  obtenerEquipos():void{    
    this.equipos.getAll().subscribe(res=>{
      this.equipo=res as any[];      
      console.log(res);      
    })    
  }
}
