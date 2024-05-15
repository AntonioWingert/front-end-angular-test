import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCardsList } from '../../store/card-list.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-name-block-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './name-block-form.component.html',
  styleUrl: './name-block-form.component.scss'
})
export class NameBlockFormComponent {
  name: string | undefined;
  block: string = 'Amonkhet';
  error: string | undefined;

  cards = new Observable<Card[]>();

  constructor(private store: Store) { }

  onSubmit() {
    this.getCardsList();
    this.name = '';
    this.block = 'Amonkhet';
  }

  getCardsList() {
    if (this.name) {
      this.store.dispatch(loadCardsList({ name: this.name, block: this.block }));
    }
  }

}
