import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Array<any>=[]
  editando=0;
  
  constructor(private paisdb:PaisService, private router: Router) { }

  ngOnInit(): void {
    this.paisdb.getAll().subscribe(res=>{
      this.paises=res as any[];
      console.log(res);
    })
  }

  eliminarPais(id:any):void{
    this.paisdb.delete(id).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }

  agregarPais():void{
    this.router.navigate(['registro-pais'])
  }

  editarPais(eq:any):void{
    this.editando=eq.cod_pais;
  }

  cancelarEdicion():void{
    this.editando=0;
  }

  guardarPais(eq:any):void{
    this.paisdb.update(eq.cod_pais,eq).subscribe(res=>{
      console.log(res);
      this.editando=0;
    });
    window.location.reload();
  }
}
