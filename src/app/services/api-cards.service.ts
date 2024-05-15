import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CardList } from '../models/card-list.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { boosterCardList } from '../models/booster-card-list.model';
import { Card } from '../models/card.model';
import { toggleBoosterVisibility } from '../store/card-list.actions';

@Injectable({
  providedIn: 'root'
})
export class NameBlockFormService {

  private url = environment;

  constructor(private httpClient: HttpClient, private store: Store) { }

  getCards(name: string, block: string): Observable<CardList> {
    return this.httpClient.get<CardList>(`${this.url.cardsApi}${name?.toLocaleLowerCase()}|${block}`);
  }

  getBoosterCards(card: Card): Observable<boosterCardList> {
    this.store.dispatch(toggleBoosterVisibility());
    return this.httpClient.get<boosterCardList>(`${this.url.boosterCardsApi}${card.code}/booster`);
  }
}
