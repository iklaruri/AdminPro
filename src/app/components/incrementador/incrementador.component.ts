import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda:string
  @Input() porcentaje:number
  @Output() cambioValor:EventEmitter<number> = new EventEmitter()
  @ViewChild('progreso') progreso:ElementRef

  constructor() {

  }

  ngOnInit(): void {
  }

  actualizarBarraValor(nuevoValor:number){

    if(nuevoValor >= 100){
      this.porcentaje=100
    }else if(nuevoValor <= 0){
      this.porcentaje=0
    }else{
      this.porcentaje=nuevoValor
    }

    this.progreso.nativeElement.value=this.porcentaje
    this.cambioValor.emit(this.porcentaje)

    this.progreso.nativeElement.focus()
  }

  cambiarValor(valor:number){
    if(this.porcentaje > 100){
      this.porcentaje = 100
      return
    }

    if(this.porcentaje < 0){
      this.porcentaje = 0
      return
    }

    this.porcentaje = this.porcentaje + valor
    this.cambioValor.emit(this.porcentaje)
  }
}
