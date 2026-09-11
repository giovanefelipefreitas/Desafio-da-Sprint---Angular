import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { Auth } from '../../services/auth';


@Component({

  selector: 'app-menu',

  standalone: true,

  imports: [CommonModule, RouterLink],

  templateUrl: './menu.html',

  styleUrl: './menu.css',

})

export class Menu {

  elemento = false;

  constructor(
    private router: Router,
    private auth: Auth
  ) {}

  mostrarElemento(){

    this.elemento = !this.elemento;

  }

  logout(){

    this.elemento = false;

    this.auth.logout();

    this.router.navigate(['/login']);

  }

}

