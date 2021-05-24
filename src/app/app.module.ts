import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtogarcausamotivoComponent } from './modules/tallersiniestros/pages/mtogarcausamotivo/mtogarcausamotivo.component';
import { TablaComponent } from './modules/tallersiniestros/components/tabla/tabla.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, MtogarcausamotivoComponent, TablaComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
