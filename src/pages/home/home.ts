import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Importação da página que o usuário será redirecionado após o login
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openLoginPage() {
	this.navCtrl.setRoot(LoginPage);
    //this.auth.logout();
  }

}
