import { createAction, props } from "@ngrx/store";
import { Card } from "../models/card.model";
import { boosterCard } from "../models/booster-card.model";

export const loadCardsList = createAction(
  '[Cards List] Load Cards List',
  props<{ name: string; block: string }>()
);
export const loadCardsListSuccess = createAction(
  '[Cards List] Load Cards List Success',
  props<{ cards: Card[] }>()
);
export const loadCardsListFailure = createAction(
  '[Cards List] Load Cards List Failure',
  props<{ error: string }>()
);

export const loadBoosterCardsList = createAction(
  '[Booster Cards List] Load Booster Cards List', 
  props<{ card: Card }>()
);
export const loadBoosterCardsListSuccess = createAction(
  '[Booster Cards List] Load Booster Cards List Success',
  props<{ boosterCards: boosterCard[] }>()
);
export const loadBoosterCardsListFailure = createAction(
  '[Booster Cards List] Load Booster Cards List Failure',
  props<{ error: string }>()
);
export const toggleBoosterVisibility = createAction('[Booster Cards List] Toggle Booster Visibility');
