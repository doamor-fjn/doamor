import { Component } from '@angular/core';

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Importação do nosso modelo de usuário
import { User } from '../../models/user';

// Importação do nosso serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth';

// Importação da página que o usuário será redirecionado após o login
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  // Definindo o nosso atributo usuário do tipo User
  public user = {} as User;

  // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider, private alertCtrl: AlertController
  ) { }


  // Método para exibir as nossas mensagens de erro.
  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  // Método usado para login do usuário
  // Recebe como parametro um tipo user e tenta fazer o login
  async login(user: User) {
    // Valida se foi informado email e password
    if(user.email == "" || user.password == "")
    {
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {
        // Chama o método para fazer login
        const result = await this.auth.login(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página List
          this.navCtrl.setRoot(LoginPage);
        }
      } catch (e) {
        this.alert('Erro ao logar', e.message);
      }
    }
  }


  async register(user: User) {

    // Valida se foi informado email e password
    if(user.email == "" || user.password == "" || user.username == "" || user.birthday == "")
    {  
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {

        // Chama o método para cadastrar usuário
        const result = await this.auth.register(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página login
          this.navCtrl.setRoot(LoginPage);
        }
      } catch (e) {
        this.alert('Erro ao cadastrar', e.message);
      }
    }
  }

  ionViewDidLoad() {
    // Toda vez que um usuário acessar a página de login ele será deslogado
    this.auth.logout();
  }

}