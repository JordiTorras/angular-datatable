import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtogarcausamotivoComponent } from './modules/tallersiniestros/pages/mtogarcausamotivo/mtogarcausamotivo.component';
import { TablaComponent } from './modules/tallersiniestros/components/tabla/tabla.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, MtogarcausamotivoComponent, TablaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
