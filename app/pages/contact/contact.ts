import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController, ToastController, ModalController} from 'ionic-angular';
import {registerPage} from '../contact/registerPage';
import {ImagePicker} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  public user = {
    username: '',
    password: '',
    headface: 'images/1.jpg'
  }

  constructor(private navCtrl: NavController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController) {
    //构造函数
  }


  login() {
    if (this.user.username === '') {
      // 用户名为空，提醒处理...
      // let alert = this.alertController.create({
      //       title: '用户中心',
      //       subTitle: '你输入的用户名有误，请重新输入!',
      //       buttons: ['OK']
      //    });
      //  		alert.present();
      let toast = this.toastController.create({
        message: '你输入的用户名有误，请重新输入!',
        duration: 3000
      });
      toast.present();
    } else {
      let loader = this.loadingController.create({
        content: "正在登录...",
        duration: 3000
      });
      loader.present();
    }
  }

  registerPage() {
    let modal = this.modalController.create(registerPage);
    modal.present();
  }

  // 上传用户头像
  getPic() {
    // ImagePicker.getPictures.then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //     this.user.headface = results[i];
    //   }
    // });
    // alert("更换图片");
    ImagePicker.getPictures('').then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.user.headface = results[i];
      }
    }, (err) => { });
  }
}
