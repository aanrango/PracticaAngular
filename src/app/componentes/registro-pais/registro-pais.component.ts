import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-registro-pais',
  templateUrl: './registro-pais.component.html',
  styleUrls: ['./registro-pais.component.css']
})
export class RegistroPaisComponent implements OnInit {

  pais={
    nombre_pais:'',    
  }
  
  constructor(private paisDB:PaisService, private router: Router) { }

  ngOnInit(): void {
  }

  crearPais():void{
    this.paisDB.create(this.pais).subscribe(res=>{
      console.log(res);
      this.pais={
        nombre_pais:'',        
      }
    });
    this.navegarPaises();
  }

  navegarPaises():void{
    this.router.navigate(['paises']);
  }
}
