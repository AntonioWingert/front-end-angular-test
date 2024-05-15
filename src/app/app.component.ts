import { Component } from '@angular/core';
import { BoosterCardComponent } from '@components/booster-card/booster-card.component';
import { CardComponent } from '@components/card/card.component';
import { NameBlockFormComponent } from '@components/name-block-form/name-block-form.component';
import { selectBoosterVisibility, selectIsLoading } from './store/card.selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NameBlockFormComponent,
    CardComponent,
    BoosterCardComponent,
    NgIf, AsyncPipe,
    LoadingSpinnerComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isBoosterVisible$ = this.store.select((selectBoosterVisibility));
  isLoading$ = this.store.select((selectIsLoading));

  constructor(private store: Store) { }

}
