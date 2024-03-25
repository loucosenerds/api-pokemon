// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card.component'; 

import {MatChipsModule} from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatExpansionModule} from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { PokemonService } from '../app/services/pokemon.service';
import { CardDetalhesComponent } from './cards/card-detalhes/card-detalhes.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  // Adicione outras rotas conforme necessário para os outros itens de menu
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent ,CardDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule,
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule, MatInputModule, MatSnackBarModule,MatProgressSpinnerModule,
    ReactiveFormsModule, MatExpansionModule

  ],
  providers: [

    PokemonService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
