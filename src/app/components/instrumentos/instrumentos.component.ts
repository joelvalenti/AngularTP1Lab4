import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosArr:any[] = [];

  constructor(private servicio:InstrumentosService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.instrumentosArr = this.servicio.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx:string){
    console.log("ID Instrumento: " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }


}
