import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CambioComponent } from './cambio/cambio.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { DirectivaComponent } from './directiva/directiva.component';



@NgModule({
  declarations: [AppComponent, CambioComponent, FormularioReactivoComponent, DirectivaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
