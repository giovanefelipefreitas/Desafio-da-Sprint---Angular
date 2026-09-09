import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario = {
    nome: '',
    senha: ''
  };

  mensagemErro = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  login() {

    this.mensagemErro = '';

    console.log('Enviando:', this.usuario);

    this.auth.login(this.usuario).subscribe({

      next: (response) => {

        console.log('Login realizado com sucesso!');
        console.log('Resposta da API:', response);

        this.router.navigate(['/home']);

      },

      error: (err) => {

        console.error('Erro da API:', err);

        this.mensagemErro = 'Usuário ou senha incorretos';

      }

    });

  }

}

