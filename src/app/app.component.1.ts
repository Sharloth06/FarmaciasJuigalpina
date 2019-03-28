import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mis Medicamentos',
      url:'/mismedicamentos',
      icon:'star'
    },

    {
      title: "Farmacias",
      url: '/farmacias',
      icon: 'medkit'
    },
    {
      title: "Promociones",
      url: '/promociones',
      icon: 'checkbox'
    },

    {
      title: "Buzón de Sugerencias",
      url: '/buzondesugerencias',
      icon: 'paper-plane'
    },
    {
      title: "Acerca de nosotros",
      url: '/acerca-de-nosotros',
      icon: 'person'
    },
    {
      title: "Mi cuenta",
      url: '/mi cuenta',
      icon: 'person-add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
