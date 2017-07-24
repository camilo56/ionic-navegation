import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { Pagina2Page } from '../index.paginas';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pagina2Page: any = Pagina2Page;
  
  constructor(public navCtrl: NavController, 
              private menuCtrl: MenuController,           
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  goPage(){
    this.navCtrl.push( Pagina2Page );
  }

  mostrarMenu(){
    console.log('mostrarMenu');
    this.menuCtrl.toggle();
  }
}
