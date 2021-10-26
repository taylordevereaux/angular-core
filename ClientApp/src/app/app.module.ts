import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutes } from './app.routing';
import { CounterStore } from './counter/counter.store';
import { FetchDataStore } from './fetch-data/fetch-data.store';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AppRoutes
  ],
  providers: [CounterStore, FetchDataStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
