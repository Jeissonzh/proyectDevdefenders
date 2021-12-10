import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarText: string;

  constructor() { 
    this.navbarText = "Ingresar";
  }

  ngOnInit(): void {
  }

  changeNavbarText(texto: boolean): void{
    texto? this.navbarText = "Cerrar Sesion": this.navbarText = "Ingresar";
  }

}
