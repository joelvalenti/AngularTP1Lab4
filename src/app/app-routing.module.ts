import { DondeestamosComponent } from './components/dondeestamos/dondeestamos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
    { path: 'donde-estamos', component: DondeestamosComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
