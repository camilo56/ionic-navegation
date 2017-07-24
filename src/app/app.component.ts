import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TapsPage, Ajustes2Page } from '../pages/index.paginas';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  taps = TapsPage;
  ajustes2Page = Ajustes2Page;
  rootPage:any = TapsPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              private menuCtrl: MenuController, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page:any){
     this.rootPage = page;
     this.cerrarMenu();
  }

  cerrarMenu(){
    this.menuCtrl.close();
  }
}
