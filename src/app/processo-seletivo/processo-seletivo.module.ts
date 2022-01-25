import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessoSeletivoRoutingModule } from './processo-seletivo-routing.module';
import { ProcessoSeletivoComponent } from './processo-seletivo/processo-seletivo.component';


@NgModule({
  declarations: [
    ProcessoSeletivoComponent
  ],
  imports: [
    CommonModule,
    ProcessoSeletivoRoutingModule
  ]
})
export class ProcessoSeletivoModule { }
