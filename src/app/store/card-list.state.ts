import { boosterCard } from "../models/booster-card.model";
import { Card } from "../models/card.model";

export interface ICardListState  {
  cards: Card[];
  boosterCards: boosterCard[];
  isLoading: boolean;
  error: string;
  isBoosterVisible: boolean;
}
