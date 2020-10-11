import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolicitarbeneficioComponent } from './solicitarbeneficio/solicitarbeneficio.component';
import { SistemaComponent } from './sistema/sistema.component';
import { StatusComponent } from './status/status.component';
import { EscolaComponent } from './escola/escola.component';
import { BlocoumComponent } from './blocoum/blocoum.component';
import { MercadoComponent } from './mercado/mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SolicitarbeneficioComponent,
    SistemaComponent,
    StatusComponent,
    EscolaComponent,
    BlocoumComponent,
    MercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
