import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import { CardDetalhesComponent } from './card-detalhes/card-detalhes.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  cards: any[] = [];
  meusPokemons: any[] = [];
  cardsToShow: any[] = [];
  items = 10;
  selectedCard: any; 
  panelOpenState = false;

  constructor(
        private pokemonService: PokemonService,
        private dialog: MatDialog,
        private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadAllCards();
  } 


  loadAllCards() {
    this.pokemonService.getAllCards().subscribe((data: any) => {
      if (data && data.data) {
        this.cards = data.data;
        this.loadInitialCards();
      } else {
        console.error('Dados inválidos:', data);
      }
    });
  }

  loadInitialCards() {
    this.cardsToShow = this.cards.slice(0, this.items);
  }

  pegarPokemon(card: any) {

    this.meusPokemons.push(card);
    const indexToRemove = this.cards.findIndex(item => item.name === card.name);

    if (indexToRemove !== -1) {
        
        this.cards.splice(indexToRemove, 1);
        this.cardsToShow = this.cards.slice(0, this.items);

       this._snackBar.open('Pegou', card.name);


    }

    
  }
 
  openDetalhes(card: any) {

    if (card && card.name) {

      const dialogRef = this.dialog.open(CardDetalhesComponent, {
        width: '520px',  
        height: '520px',  
        panelClass: 'custom-dialog', 
        data: card 
      });

    } else {
      console.error('Erro ao abrir detalhes: o objeto de cartão é inválido', card);
    }

  }
  
  

}
