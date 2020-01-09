import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  title: string;

  constructor(private router: Router,
              private _title: Title,
              private meta: Meta) {

    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.title = data.titulo;
      this._title.setTitle( this.title );

      const metaTag: MetaDefinition = {
        
        name: 'description',
        content: this.title
      };

      this.meta.updateTag( metaTag );
    })
  }
  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd), // Filtra solo los que sean instancias de activationEnd
      // instanceof es una función de JS
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      /** La instancia de ActivationEnd que contiene el firstChild direferente a null contiene info que no sirve para hacer
       referencia en el breadCrumbs ya que no contiene data */
      map((evento: ActivationEnd) => evento.snapshot.data)
    )
  }

}

/* * El router.Event es un observable que te indica dónde estás parado, esto se realiza con base en la info de los routes e imprime activationEnd.
* Cuando se manda a llamar a un observable se pueden trabajar con ellos en el pipe */