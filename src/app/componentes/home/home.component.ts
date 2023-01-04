import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarEstadios():void{
    this.router.navigate(['estadios']);
  }
  navegarJugadores():void{
    this.router.navigate(['jugadores']);
  }
  navegarPaises():void{
    this.router.navigate(['paises']);
  }
  navegarEquipos():void{
    this.router.navigate(['equipos']);
  }  

}
