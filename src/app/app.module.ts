import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


// Importação da página de login
import { LoginPage } from '../pages/login/login';

// Importação da página de cadastro
import { RegisterUserPage } from '../pages/register-user/register-user';

// Configurações do FIREBASE
import { config } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage, // Registrando a página de login
    RegisterUserPage, // Registrando a página de cadastro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage, // Registrando a página de login
    RegisterUserPage, // Registrando a página de cadastro
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthProvider
  ]
})
export class AppModule {}