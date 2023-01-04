import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadioService } from 'src/app/servicios/estadio.service';

@Component({
  selector: 'app-estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css']
})
export class EstadiosComponent implements OnInit {

  estadios: Array<any>=[];
  editando=0;
  constructor(private estadiodb: EstadioService, private router: Router) { }

  ngOnInit(): void {
    this.estadiodb.getAll().subscribe(res=>{
      this.estadios=res as any[];
      console.log(res);
    })
  }

  eliminarEstadio(id:any):void{
    this.estadiodb.delete(id).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }

  agregarEstadio():void{
    this.router.navigate(['registro-estadio']);
  }

  editarEstadio(jug:any):void{
    this.editando=jug.cod_estadio;
  }

  cancelarEdicion():void{
    this.editando=0;
  }

  guardarEstadio(jug:any):void{
    this.estadiodb.update(jug.cod_jugador,jug).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }
}
