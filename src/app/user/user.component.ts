import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'alecode00';
  isLoggedIn = false;
  favGame = '';
  getFavorite(gameName: string) {
    this.favGame = gameName;
  }
  greet() {
    alert('Hola a tod@s');
  }
  handleIsLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
