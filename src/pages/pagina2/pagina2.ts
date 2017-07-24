import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Mutante } from './mutante.interface';
import { Pagina3Page } from '../index.paginas';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {

  pagina3Page = Pagina3Page;
  mutantes: Mutante[] = [
    {
      nombre: "wolverin",
      poder: "Regeneracion acelerada"
    },{
      nombre: "Siniestro",
      poder: "Inteligencia"
    },{
      nombre: "Iceman",
      poder: "Genera hielo"
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante: Mutante) {
    console.log(mutante);
    this.navCtrl.push( Pagina3Page, {'mutante': mutante} );
  }

}
