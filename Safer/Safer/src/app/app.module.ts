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
import { FinancasComponent } from './financas/financas.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    MercadoComponent,
    FinancasComponent,
    EmpreendedorismoComponent,
    PagamentoComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
