import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICardListState } from "./card-list.state";

const selectCardsListState = createFeatureSelector<ICardListState>('cards');

export const selectCardsList = createSelector(
  selectCardsListState,
  (state: ICardListState) => state ? state.cards : null
);

export const selectBoosterCards = createSelector(
  selectCardsListState,
  (state: ICardListState) => state.boosterCards
);

export const selectIsLoading = createSelector(
  selectCardsListState,
  (state: ICardListState) => state.isLoading
);

export const selectError = createSelector(
  selectCardsListState,
  (state: ICardListState) => state.error
);

export const selectBoosterVisibility = createSelector(
  selectCardsListState,
  (state: ICardListState) => state.isBoosterVisible
);
