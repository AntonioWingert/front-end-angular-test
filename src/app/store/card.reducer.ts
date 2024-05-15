import { createReducer, on } from "@ngrx/store";
import { ICardListState } from "./card-list.state";
import * as A from "./card-list.actions";

export const initialState: ICardListState = {
  cards: [],
  boosterCards: [],
  isLoading: false,
  error: '',
  isBoosterVisible: false
};

export const cardsReducer = createReducer(
  initialState,
  on(A.loadCardsList, (state): ICardListState => ({
    ...state,
    isLoading: true
  })),
  on(A.loadCardsListSuccess, (state, { cards }): ICardListState => ({
    ...state,
    cards,
    isLoading: false
  })),
  on(A.loadCardsListFailure, (state, { error }): ICardListState => ({
    ...state,
    error,
    isLoading: false
  })),
  on(A.loadBoosterCardsList, (state): ICardListState => ({
    ...state,
    isLoading: true
  })),
  on(A.loadBoosterCardsListSuccess, (state, { boosterCards }): ICardListState => {
    const newBoosterCards = [...state.boosterCards, ...boosterCards].slice(-30);
    return {
      ...state,
      boosterCards: newBoosterCards,
      isBoosterVisible: true,
      isLoading: false,
      error: ''
    };
  }),
  on(A.loadBoosterCardsListFailure, (state, { error }): ICardListState => ({
    ...state,
    error,
    isBoosterVisible: true,
    isLoading: false
  })),
  on(A.toggleBoosterVisibility, (state): ICardListState => ({
    ...state,
    isBoosterVisible: !state.isBoosterVisible
  }))
);