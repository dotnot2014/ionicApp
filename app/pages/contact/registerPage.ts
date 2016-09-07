import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/registerPage.html'
})
export class registerPage {
  constructor(private navCtrl: NavController,
  			  private viewCtrl:ViewController
  	) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
