import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
   templateUrl: 'build/pages/about/contactDetails.html'
})
export class contactDetails {
   // 构造函数
   constructor(private navCtrl: NavController) {

   }
 }

// import {Component} from '@angular/core';
// import {NavController,NavParams} from 'ionic-angular';

// @Component({
//   templateUrl: 'build/pages/about/contactDetails.html'
// })

// // class contactDetails {
// // 	item;

// // 	constructor(params:NavParams){
// // 		this.item = params.data.item;
// // 	}
// // }


// export class contactDetails {
// 	   // item;

// 	   // 构造函数
// 	  constructor(private nav: NavController) {
// 	  		// this.item = params.data.item;
// 	  }
// }
