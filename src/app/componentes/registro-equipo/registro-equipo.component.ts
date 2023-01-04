import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { EstadioService } from 'src/app/servicios/estadio.service';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css']
})
export class RegistroEquipoComponent implements OnInit {

  pais:Array<any>=[];
  estadio:Array<any>=[];

  equipo={
    nombre_equipo:'',
    añofund_equipo:1920,
    cod_estadio:'',
    cod_pais:''
  }

  constructor(private equipoDB:EquipoService, private router: Router, private estadiodb:EstadioService, private paisdb: PaisService) { }

  ngOnInit(): void {
    this.estadiodb.getAll().subscribe(res=>{
      this.estadio=res as any[];      
    }) 
    this.paisdb.getAll().subscribe(res=>{
      this.pais=res as any[];      
    }) 
  }

  crearEquipo():void{
    this.equipoDB.create(this.equipo).subscribe(res=>{
      console.log(res);
      this.equipo={
        nombre_equipo:'',
        añofund_equipo:1920,
        cod_estadio:'',
        cod_pais:''
      }
    });    
    this.navegarEquipos();
  }

  navegarEquipos():void{
    this.router.navigate(['equipos']);          
  }
}
