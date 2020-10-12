import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocoumComponent } from './blocoum/blocoum.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { FinancasComponent } from './financas/financas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MercadoComponent } from './mercado/mercado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SolicitarbeneficioComponent } from './solicitarbeneficio/solicitarbeneficio.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'solicitarbeneficio', component: SolicitarbeneficioComponent},
  { path: 'sistema', component: SistemaComponent},
  { path: 'status', component: StatusComponent },
  { path: 'blocoum', component: BlocoumComponent},
  { path: 'mercado', component: MercadoComponent},
  { path: 'financas', component: FinancasComponent},
  { path: 'empreendedorismo', component: EmpreendedorismoComponent},
  { path: 'pagamento', component: PagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
