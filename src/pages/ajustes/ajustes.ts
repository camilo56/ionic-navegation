import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from './../modal/modal';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              private modalCtrl: ModalController,            
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal(){
    this.navCtrl.parent.select(0);
  }
  
  abrirModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre: 'camilo', edad: '25'});
    modal.present();
    modal.onDidDismiss( this.modalCerrado);
  }

  modalCerrado(param){
    console.log(param)
  }
  
}
