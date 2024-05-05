import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CurrencyPipe } from '../currency.pipe';
import { UppercasePipe } from '../uppercase.pipe';
import { DataPipe } from '../data.pipe';
import { EmailPipe } from '../email.pipe';


@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, UppercasePipe, DataPipe,EmailPipe,NgStyle, NgIf, NgFor,RouterLink],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  public nome = 'Gladis';
  public sobrenome = 'Stockhausenn';
  by: any;

  public boasVindas() {
    return `Olá ${this.nome} ${this.sobrenome}, seja bem vindo!`;
  }

  public titulo = 'Controle Financeiro';


  // INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 6000;
  public despesas = 5500;

  public saldo() {
  return this.receitas - this.despesas
}



    // PROPERTY BINDING

 //esta função fara o calculo do valor e se o valor positivo o saldo aparecera em azul :(:senão) o valor aparecera em vermelho

public tipoSaldo(){
  let diferenca = this.receitas - this.despesas;
  let classSaldo = diferenca >= 0 ? 'saldo-positivo' : 'saldo-negativo';
  return classSaldo;

}

 // TREINANDO PIPE
 public date = new Date();
 public usuario = 'gladiswilmastock';

 // LISTA DE TRANSAÇÕES
 public transacoes = [
  {
    "id": 1,
    "descricao": "Recebimento de Salário",
    "tipo": "receita",
    "valor": 8000,
    "data": new Date()
  },
  {
    "id": 2,
    "descricao": "Pagamento de Aluguel",
    "tipo": "despesa",
    "valor": 2000,
    "data": new Date()
  },
  {
    "id": 3,
    "descricao": "Conta de Luz",
    "tipo": "despesa",
    "valor": 150,
    "data": new Date()
  },
  {
    "id": 4,
    "descricao": "Parcela do Carro",
    "tipo": "despesa",
    "valor": 1200,
    "data": new Date()
  },
  {
    "id": 5,
    "descricao": "Pagamento da Comissão",
    "tipo": "receita",
    "valor": 900,
    "data": new Date()
  }
];


}
