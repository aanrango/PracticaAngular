import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { EstadioService } from 'src/app/servicios/estadio.service';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  pais:Array<any>=[];
  estadio:Array<any>=[];
  equipos: Array<any>=[];
  espera:Array<any>=[]
  editando=0;
  constructor(private equipodb: EquipoService, private router: Router, private paisesdb:PaisService, private estadiodb:EstadioService) { }

  ngOnInit(): void {
    this.equipodb.getAll().subscribe(res=>{
      var arr=[];
      arr=res as any[];

      arr.forEach(equipo=>{
        this.paisesdb.get(equipo.cod_pais).subscribe(r=>{
          var datos={
            nombrePais: r.nombre_pais,            
          }
          var aux=Object.assign(equipo, datos);        
          //return aux;
        })
      });

      arr.forEach(eq=>{
        this.estadiodb.get(eq.cod_estadio).subscribe(r=>{
          var datos={
            nombreEstadio: r.nombre_estadio,            
          }
          var aux=Object.assign(eq, datos);
          this.equipos.push(aux); 
          console.log(this.equipos);
        })
      })
      
    }),
    this.paisesdb.getAll().subscribe(res=>{
      this.pais=res as any[];      
            
    }),
    this.estadiodb.getAll().subscribe(res=>{
      this.estadio=res as any[];      
      
    })        
  }

  eliminarEquipo(id:any):void{
    this.equipodb.delete(id).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }

  agregarEquipo():void{
    this.router.navigate(['registro-equipos'])
  }

  editarEquipo(eq:any):void{
    this.editando=eq.cod_equipo;
  }

  cancelarEdicion():void{
    this.editando=0;
  }

  guardarEquipo(eq:any):void{
    this.equipodb.update(eq.cod_equipo,eq).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }
}
