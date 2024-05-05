import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdicionarTransacoesComponent } from './adicionar-transacoes/adicionar-transacoes.component';   
import { ListarTransacoesComponent } from './listar-transacoes/listar-transacoes.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';



export const routes: Routes = [
    { path:'', component: ListarTransacoesComponent},
    { path:'adicionar', component: AdicionarTransacoesComponent},
    { path: 'sessao', component: SessionTimerComponent }


 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}