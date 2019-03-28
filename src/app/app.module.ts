import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyBn2typaIBrLfxTKzQVnhbvZuRFmfTPuSA",
  authDomain: "farmaciasjuigalpina.firebaseapp.com",
  databaseURL: "https://farmaciasjuigalpina.firebaseio.com",
  projectId: "farmaciasjuigalpina",
  storageBucket: "farmaciasjuigalpina.appspot.com",
  messagingSenderId: "398452945888"


}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [

  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    AngularFireModule.initializeApp (firebaseConfig),
    AngularFirestoreModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
