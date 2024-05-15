import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as A from "./card-list.actions";
import { NameBlockFormService } from "../services/api-cards.service";
import { CardList } from "../models/card-list.model";
import { Injectable } from "@angular/core";
import { boosterCardList } from "../models/booster-card-list.model";
import { boosterCard } from "../models/booster-card.model";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private service: NameBlockFormService,
    private toaster: ToastrService
  ) { }

  loadCardsListEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(A.loadCardsList),
      mergeMap(({ name, block }) => this.service.getCards(name, block)
        .pipe(
          map(({ sets }: CardList) => {
            this.toaster.success('Cartas carregadas com sucesso!');
            return A.loadCardsListSuccess({ cards: sets })
          }),
          catchError((error) => {
            this.toaster.error('Erro retornado pela API, por favor selecione outro pacote.');
            return of(A.loadCardsListFailure({ error: error.message }))
          })
        ))
    );
  });

  loadBoosterCardsListEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(A.loadBoosterCardsList),
      mergeMap(({ card }) => this.service.getBoosterCards(card)
        .pipe(
          map(({ cards }: boosterCardList) => {
            const creatureCards = cards.filter((c: boosterCard) =>
              c.types.map(type => type.toLowerCase()).includes('creature'));
            this.toaster.success('Boosters abertos com sucesso! Role a tela para baixo!');
            return A.loadBoosterCardsListSuccess({ boosterCards: creatureCards });
          }),
          catchError((error) => {
            this.toaster.error('Erro retornado pela API, por favor selecione outro pacote.');
            return of(A.loadBoosterCardsListFailure({ error: error.message }))
          })
        ))
    );
  });
}