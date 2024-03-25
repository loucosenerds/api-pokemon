// card.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { CardComponent } from './card.component';
import { CardDetalhesComponent } from './card-detalhes/card-detalhes.component';

@NgModule({
  declarations: [
    CardComponent,
    CardDetalhesComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    CardDetalhesComponent
  ]
})
export class CardModule { }
