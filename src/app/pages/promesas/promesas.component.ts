import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() {
    //  promesa.then( // Es una forma de notificar que terminó correcta o incorrectamente.
    //    () => console.log('terminó'),
    //    () => console.log('Error')
    //  );
    // Otra forma más limpiar de cachar si terminó o tuvo error es:
    this.countThree().then(
      mensaje => console.log('terminó', mensaje)
     // () => console.log('terminó') sintaxis sin mensaje 
    )
      .catch(error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      let contador = 0;

      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);

    });
  }

}
