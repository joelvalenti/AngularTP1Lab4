import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json'

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {

  instrumentosFile:any  = (data  as  any).default;

  constructor() {
    console.log(this.instrumentosFile);
   }
   
  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentoXId(idx:string):any{
      for(let instrumento of this.instrumentosFile.instrumentos){
          if(instrumento.id == idx){
            return instrumento;
          } 
      }
  }
}


