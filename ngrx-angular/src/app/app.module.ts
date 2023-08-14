import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterbottonComponent } from './component/counterbotton/counterbotton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterbottonComponent,
    CounterdisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
