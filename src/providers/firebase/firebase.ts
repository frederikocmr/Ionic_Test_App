import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { UserAccount } from '../../models/user-account';

@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient,
    private afAuth: AngularFireAuth) {
  }

  signUp(account: UserAccount): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password).then((user) => {
      // retorno ok
      console.log(user);
    })
      .catch((error) => {
        //retornar erro...
        console.log(error);
      });
  }


  signIn(account: UserAccount): Promise<void> {
    return this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password).then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })
  }

}
