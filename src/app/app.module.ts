import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CambioComponent } from './cambio/cambio.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [AppComponent, CambioComponent, FormularioReactivoComponent, DirectivaComponent, PadreComponent, HijoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
