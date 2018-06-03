import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers';
import { MainPage } from '../';

import { UserAccount } from '../../models/user-account';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  // Our translated text strings
  private signupErrorString: string;
  public account: UserAccount = { email: "", password: "" };;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private firebase: FirebaseProvider) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
  }

  doSignup() {

    this.firebase.signUp(this.account).then((user) => {

      this.navCtrl.push(MainPage); // mostrar msg sucesso -> error do catch nao ta dando...
    })
      .catch((error) => {
        // nao ta entrando aqui pq sempre da retorno ok
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
  }
  ;


}
