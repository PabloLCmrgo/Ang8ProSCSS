import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// Document desde Angular 7 se importa en la librería de common, versiones anteriores se importaba de @anguar/platform-browser.

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: settings = {
  temaUrl: 'assets/css/colors/default.css',
  tema: 'default'
};

  constructor( @Inject (DOCUMENT) private _document ) {
    this.uploadSettings();
  }

  saveSettings() {
    console.log('Guardado en el localStorage');
    localStorage.setItem('settings', JSON.stringify( this.ajustes )); // Localstorage solo guarda strings
  }

  // Método para cargar ajustes
  uploadSettings() {
    if ( localStorage.getItem('settings') ) { // Primero se va a preguntar si existen ajustes
      this.ajustes =  JSON.parse( localStorage.getItem('settings') ); // JSON.parse es para pasar un string a un objeto.
      console.log('cargando del localStorage');
      this.applyTheme( this.ajustes.tema );
    } else {
      console.log('usando valores por defecto');
      this.applyTheme( this.ajustes.tema );
    }
  }

  // Método para aplicar el tema.
  applyTheme(tema: string) {
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.saveSettings();
  }

}


interface settings {
  temaUrl: string;
  tema: string;
}
