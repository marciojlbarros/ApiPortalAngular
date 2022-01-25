import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'processo-seletivo'
  },
  {
    path: 'processo-seletivo',
    loadChildren: () => import('./processo-seletivo/processo-seletivo.module').then(mod => mod.ProcessoSeletivoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
