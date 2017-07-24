import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrincipalPage, 
          Pagina2Page,
          Pagina3Page,
          AjustesPage,
          Ajustes2Page, 
          ModalPage, 
          TapsPage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage, 
    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page, 
    ModalPage, 
    TapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Volver',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage, 
    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page, 
    ModalPage, 
    TapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
