import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculosAPI, DadosVeiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicle {

  private apiUrl = "http://localhost:3001";

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(`${this.apiUrl}/vehicles`);
  }

  getDadosVeiculo(vin: string): Observable<DadosVeiculo> {
    return this.http.post<DadosVeiculo>(
      `${this.apiUrl}/vehicleData`,
      { vin: vin }
    );
  }

}