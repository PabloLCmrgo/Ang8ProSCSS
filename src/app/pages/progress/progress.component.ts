import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  // actualizar(e) {  Solamente es para verificar que si se está recibiendo el evento del hijo al padre mediante Output
  //   console.log('Evento', e);
  // }
}
