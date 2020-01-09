import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable()
    // .pipe(
    //   retry(2)
    // )
      .subscribe(
        numero => console.log('subs', numero),
        error => console.error('Error en el obs', error),
        () => console.log('El observador terminó')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval(() => {
        contador ++;

        const salida = {
          valor: contador
        }
        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval( intervalo );
        //   observer.error('Troneishon D:');
        // }
      }, 1000);

    }).pipe( 
      map( resp => resp.valor),
      filter( (valor, index) => {
        // console.log('Filter', valor, index);
        if ((valor % 2 ) === 1) {
          // impar 
          return true;
        } else {
          // par 
          return false;
        }
      })
      );
  }

}

// Para dejar de estar suscrito a una observable como los que consumen los endpoints, primero se crea una variable de tipo Subscription, después esa misma variable
// será igual a todo el observable y en el ciclo de vida OnDestroy se va a mandar a de suscribir con unsubscribe().
