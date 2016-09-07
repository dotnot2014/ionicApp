import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/contactDetails.html'
})

class contactDetails {
	item;

	constructor(params:NavParams){
		this.item = params.data.item;
	}
}

@Component({
  templateUrl: 'build/pages/about/about.html'
})

export class AboutPage {

  // 初始化模拟数据
  public contacts =[
	    {
	  		"contactid":1,
	  		"contactname":"贺壹壹",
	  		"contacttext":"13312345678",
				"headface":"images/1.jpg"
	  	},
	  	{
				"contactid": 2,
				"contactname": "吉娜",
				"contacttext": "13312345678",
				"headface": "images/2.jpg"
	  	},
	  	{
				"contactid": 3,
				"contactname": "老贺",
				"contacttext": "13312345678",
				"headface": "images/3.jpg"
	  	}
  	];

	// public user = {
  //   username: '',
  //   password: '',
  //   headface: 'images/1.jpg'
  // }

  // 构造函数
  constructor(private nav: NavController) {

  }

  // list-item点击后事件
  itemClick(item){
  	this.nav.push(contactDetails,{item: item});
		console.log(item);
  }
}


