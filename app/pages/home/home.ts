import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  
  }

  onPageLoaded(){
  	console.log("page 1: page loaded");
  }

  onPageWillEnter(){

    // 页面初始化动作
  	console.log("page 1: page will enter");
  }

  onPageDidEnter(){
  	console.log("page 1: page did enter");
  }

  onPageWillLeave(){
    console.log("page 1: page will leave");
  }

  onPageDidLeave(){
    console.log("page 1: page did leave");
  }

}
