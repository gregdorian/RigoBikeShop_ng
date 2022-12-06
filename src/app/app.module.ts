import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';


import { VentasService } from './shared/ventas.service';


@NgModule({
  declarations: [
    AppComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
