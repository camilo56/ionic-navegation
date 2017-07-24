import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string;
  edad: number;
  
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public navParams: NavParams) {

    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');
    console.log('nombre: ', this.nombre, ' edad: ', this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarCon(){
    this.viewCtrl.dismiss({nombre: 'cristian',
                            eddad: 25,
                            coord: {left: 50, right: 80}
                          })
  }

  cerrarSin(){
    this.viewCtrl.dismiss();

  }
}
