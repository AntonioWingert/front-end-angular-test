import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { selectBoosterCards } from '../../store/card.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-booster-card',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './booster-card.component.html',
  styleUrl: './booster-card.component.scss'
})
export class BoosterCardComponent {
  boosterCards$ = this.store.select((selectBoosterCards));

  constructor(private store: Store) {}
}
