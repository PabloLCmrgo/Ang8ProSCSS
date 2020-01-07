import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public  _settings: SettingsService ) { }

  ngOnInit() {
  }

  // Este método es para acceder al dom para elegir un tema.
  changeColor(tema: string, link: any) {
    this.applyCheck( link ); // Solamente es para pasar la referencia del link al otro método.
    console.log(tema);
    this._settings.applyTheme( tema );

  }

  // Este método es para agregar la clase working que es una palomita que indica el tema seleccionado.
  applyCheck( link: any ) {

    let selectors: any = document.getElementsByClassName('selector');

    for ( let ref of selectors ) {
      ref.classList.remove('working'); // Es para eliminar una clase con Vanilla JS.
    }

    link.classList.add('working'); // Es para agregar una clase, en este caso al link seleccionado, también es con Vanilla JS.
  }

  putCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let tema = this._settings.ajustes.tema;
    for ( let ref of selectors ) {
      if ( ref.getAttribute('data-theme') === tema ) { ref.classList.add('working'); break; }
    }
  }
}


/** Practica para cambiar el tema de una aplicación
 * Tener los css en una carpeta en assets
 * Crear una lista en el componente en practica junto con un método que cache el color seleccionado
 * Una forma de hacer referencia a un parte del html o al DOM:
 * Se va a importar DOCUMENT
 *        @Inject (DOCUMENT) private _document
 * Es otra forma de inyectar servicios
 * Con el servicio del documento se va a ingresar al id del index, este id no se debe repetir nunca con otro id
 * con el setAttribute que va a tener dos parametros se va a seleccionar que propiedad del elemento del html se va cambiar y
 * una variable local con el path que se va a modificar con el clic.
 * A cada elemento de la lista (Que tiene cada tema) se le va a agregar una referencia en este caso será un #link, este mismo
 * se enviará como parametro. Ahora bien en el método applyCheck se accederá a una clase en común de todos los elementos de la lista,
 * en este caso es selector, con el ciclo for se eliminará la clase working (Que es la que imprime la flecha), al final desde el parametro
 * link se accederá para agregar la clase working al link que se encuentre seleccionado.
 */