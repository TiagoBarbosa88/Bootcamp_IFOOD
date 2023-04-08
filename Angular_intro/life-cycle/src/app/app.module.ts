import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModule } from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CheckSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
