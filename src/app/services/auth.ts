import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(usuario: Pick<Usuario, 'nome' | 'senha'>): Observable<Usuario> {
    return this.http.post<Usuario>(
      `${this.apiUrl}/login`,
      usuario
    ).pipe(
      tap(() => {
        sessionStorage.setItem('logado', 'true');
      })
    );
  }

  logout() {
    sessionStorage.removeItem('logado');
  }

  estaAutenticado(): boolean {
    return sessionStorage.getItem('logado') === 'true';
  }
}

