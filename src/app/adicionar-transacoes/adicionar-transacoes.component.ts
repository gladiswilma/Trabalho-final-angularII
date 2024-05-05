import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-transacoes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adicionar-transacoes.component.html',
  styleUrl: './adicionar-transacoes.component.scss'
})
export class AdicionarTransacoesComponent {
   // EVENT BINDING
   public transacaoAdicionada!: string;

   public adicionarTransacao() {
     return this.transacaoAdicionada = 'Transação adicionada com sucesso!';
   }
 
   //2WHAY BINDING
 
  public valorTransacao!: number;

}
