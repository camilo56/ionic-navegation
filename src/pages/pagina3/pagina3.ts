import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Mutante } from './../pagina2/mutante.interface';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante: Mutante;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutante = this.navParams.get('mutante');
    console.log(this.mutante);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  irAtras(){
    console.log(this.navCtrl);
    this.navCtrl.pop()
  }
  
  irRoot(){
    this.navCtrl.popToRoot();
  }
}
