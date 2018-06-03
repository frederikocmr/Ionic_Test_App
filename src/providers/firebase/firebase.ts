import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient,
    private afAuth: AngularFireAuth) {
  }

  signUp(email: string, password: string): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      // retorno ok
    })
      .catch((error) => {
        //retornar erro...
      });
  }

}
