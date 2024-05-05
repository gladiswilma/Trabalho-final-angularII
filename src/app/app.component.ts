import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarTransacoesComponent } from './listar-transacoes/listar-transacoes.component';
import { AdicionarTransacoesComponent } from './adicionar-transacoes/adicionar-transacoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarTransacoesComponent, AdicionarTransacoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ControleFinanceiro';
  }
