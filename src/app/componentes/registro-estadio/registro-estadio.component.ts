import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadioService } from 'src/app/servicios/estadio.service';

@Component({
  selector: 'app-registro-estadio',
  templateUrl: './registro-estadio.component.html',
  styleUrls: ['./registro-estadio.component.css']
})
export class RegistroEstadioComponent implements OnInit {

  estadio={    
    nombre_estadio:'',
    ciudad_estadio:'',
    aforo_estadio:'',    
  }
  
  constructor(private estadioDB:EstadioService, private router: Router) { }

  ngOnInit(): void {
  }

  crearEstadio():void{
    this.estadioDB.create(this.estadio).subscribe(res=>{
      console.log(res);
      this.estadio={
        nombre_estadio:'',
        ciudad_estadio:'',
        aforo_estadio:'',  
      }
    });
    this.navegarEstadios();
  }

  navegarEstadios():void{
    this.router.navigate(['estadios']);
  }
}
