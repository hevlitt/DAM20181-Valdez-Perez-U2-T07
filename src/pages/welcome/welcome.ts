import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public nom;
  public tel;
  public com;
  public email;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nom = this.navParams.get('nombre');
    this.tel = this.navParams.get('telefono');
    this.com = this.navParams.get('comentario');
    this.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
