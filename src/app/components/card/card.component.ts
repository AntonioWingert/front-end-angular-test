import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCardsList } from '../../store/card.selectors';
import { loadBoosterCardsList } from '../../store/card-list.actions';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cards$ = this.store.select((selectCardsList));

  constructor(private store: Store) {

  }

  handleKeyup($event: KeyboardEvent) {
    this.getBoosterCards($event.target as unknown as Card);
  }
  getBoosterCards(card: Card) {
    this.store.dispatch(loadBoosterCardsList({ card }));
  }

}
