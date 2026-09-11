import { Component } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Veiculo, DadosVeiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  vehicles: Veiculo[] = [];

  selecionado: Veiculo | null = null;

  vin = '';

  dadosVeiculo: DadosVeiculo | null = null;

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {

    this.vehicle.getVeiculos().subscribe({

      next: (response) => {
        this.vehicles = response.vehicles;
      },

      error: (erro) => {
        console.error('Erro ao buscar veículos:', erro);
      }

    });

  }

  veiculoSelecionado(event: Event): void {

    const idSelecionado = (event.target as HTMLSelectElement).value;

    if (idSelecionado) {

      this.selecionado =
        this.vehicles.find(v => v.id == Number(idSelecionado)) || null;

    } else {

      this.selecionado = null;

    }

  }

  consultarVin(): void {

    this.dadosVeiculo = null;

    if (!this.vin.trim()) {
      return;
    }

    this.vehicle.getDadosVeiculo(this.vin).subscribe({

      next: (response) => {

        this.dadosVeiculo = response;

      },

      error: (erro) => {

        console.error('VIN não encontrado:', erro);

        this.dadosVeiculo = null;

      }

    });

  }

}