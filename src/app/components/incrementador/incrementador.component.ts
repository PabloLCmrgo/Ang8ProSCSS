import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;
  /** Se pone una almodilla en el elemento del html que se hará referencia en este caso se va a agregar  #txtProgress a un
   * input, del lado de TS también se va a llamar txtProgress de tipo ElementRef ( ElementRef es una clase para manipular directamente
   * el DOM ) en la impresión del txtProgress de tipo ElementRef se va a reflejar un objeto {} y no un arreglo [], dentro del objeto
   * exite un nativeElement que son las propiedades del elemento del html */


  @Input('nombre') leyenda: string = 'Leyenda';
  /** Se puede renombrar la variable que va a recibir el dato del padre colocandola entre los paretensis del decorador. */
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter(); // sintaxis para mover emitir un número como un evento

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
   }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
  }

  onChanges( newValue: number ) {
    // console.log( newValue );

    // let elemHTML: any = document.getElementsByName('progreso')[0];
    /** Utilizando principios de JS puro;  Con el getElementByName esa instrucción regresa un arreglo con todos los elementos html que
     * coincidan con el name="progreso" al poner entre llaves cuadras la posición cero indica que se va a trabajar con el primer
     * elemento*/
    // console.log(elemHTML.value);
    console.log(this.txtProgress);
    this.txtProgress.nativeElement.value = this.progreso;

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso // el elemHTML.value se va a castear como un número y no como una cadena de this.progreso

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso ); // el eventemitter se llama cambioValor y va a emitir el valor de progreso

    this.txtProgress.nativeElement.focus(); // Para establecer el foco en un elemento.
  }


}
