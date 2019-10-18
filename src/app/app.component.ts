import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Produtor',
      url: '/produtor',
      icon: 'at'
    },
    {
      title: 'Fazendas',
      url: '/fazendas',
      icon: 'at'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'trending-up'
    },
    {
      title: 'Raças',
      url: '/racas',
      icon: 'water'
    },
    {
      title: 'Tipo de Manejo',
      url: '/tipomanejo',
      icon: 'list'
    },
    {
      title: 'Apartes',
      url: '/apartes',
      icon: 'git-commit'
    },
    {
      title: 'Ficha de Animal',
      url: '/fichaanimal',
      icon: 'paw'
    },
    {
      title: 'Trabalho de Manejo',
      url: '/manejo',
      icon: 'construct'
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
