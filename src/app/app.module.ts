import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {InstrumentosService} from './servicios/instrumentos.service';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { DondeestamosComponent } from './components/dondeestamos/dondeestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DondeestamosComponent,
    InstrumentosComponent,
    DetalleInstrumentoComponent,
    DondeestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [InstrumentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
