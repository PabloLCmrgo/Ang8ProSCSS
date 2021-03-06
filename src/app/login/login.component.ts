import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  login() {
    console.log('Ingresando');
    this.router.navigate([ '/dashboard' ]);
  }

}
