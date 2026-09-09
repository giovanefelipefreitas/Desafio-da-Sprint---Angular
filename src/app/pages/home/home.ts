import { Component } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
