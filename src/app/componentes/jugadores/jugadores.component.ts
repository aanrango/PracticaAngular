import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { JugadorService } from 'src/app/servicios/jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  
  equipo:Array<any>=[];
  jugadores: Array<any>=[];
  editando=0;
  constructor(private jugadordb: JugadorService, private router: Router, private equipos: EquipoService) { }

  ngOnInit(): void {
    
    this.jugadordb.getAll().subscribe(res=>{
      var arr=[];
      arr=res as any[];

      arr.forEach(jugador=>{
        this.equipos.get(jugador.cod_equipo).subscribe(r=>{
          var datos={
            nombreEquipo: r.nombre_equipo,            
          }
          var aux=Object.assign(jugador, datos);
          this.jugadores.push(aux);
        })
      })
    }),
    this.equipos.getAll().subscribe(res=>{
      this.equipo=res as any[];      
    })    
  }

  eliminarJugador(id:any):void{
    this.jugadordb.delete(id).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }

  agregarJugador():void{
    this.router.navigate(['registro-jugador']);
  }

  editarJugador(jug:any):void{
    this.editando=jug.cod_jugador;
  }

  cancelarEdicion():void{
    this.editando=0;
  }

  guardarJugador(jug:any):void{
    this.jugadordb.update(jug.cod_jugador,jug).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }
}
