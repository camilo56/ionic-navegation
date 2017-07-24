import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PrincipalPage, AjustesPage } from '../index.paginas';

@Component({
  selector: 'page-taps',
  templateUrl: 'taps.html',
})
export class TapsPage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapsPage');
  }

}
