import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { cardsReducer } from './store/card.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CardEffects } from './store/card.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({cards: cardsReducer}), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(CardEffects), 
    provideHttpClient(), 
    provideAnimationsAsync(),
    provideToastr()
  ]
};
