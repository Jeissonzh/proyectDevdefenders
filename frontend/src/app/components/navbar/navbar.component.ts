import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarText: string;

  constructor(public authService: AuthService) {
    this.navbarText = "Ingresar";
  }

  ngOnInit(): void {
  }

  changeNavbarText(texto: boolean): void{
    texto? this.navbarText = "Cerrar Sesion": this.navbarText = "Ingresar";
  }

}
