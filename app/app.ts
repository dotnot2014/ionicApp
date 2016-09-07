import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, Geolocation,LocalNotifications} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // 获取地理位置
      Geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      });

      // 本地化提醒功能
      LocalNotifications.schedule({
        text:'这是一个本地化提醒！',
        at:new Date(new Date().getTime()+1000),
        led:'ff0000',
        sound:null
      });

    });
  }
}

ionicBootstrap(MyApp);
