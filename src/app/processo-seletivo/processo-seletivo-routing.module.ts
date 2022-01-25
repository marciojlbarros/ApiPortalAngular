import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoSeletivoComponent } from './processo-seletivo/processo-seletivo.component';

const routes: Routes = [
  { path: '', component: ProcessoSeletivoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessoSeletivoRoutingModule { }
