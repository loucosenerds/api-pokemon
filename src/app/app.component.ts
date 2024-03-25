// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentMenuItem: string = 'cards'; // Item do menu atualmente selecionado

  openCard() {
    this.currentMenuItem = 'cards';
  }
 
}
