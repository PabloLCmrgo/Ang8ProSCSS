import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // Es la forma de llamar funciones, scripts, plugins, etc que estén fuera del proyecto Angular
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
