import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthOptions, User, AuthProvider } from './auth.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user != null));
  }
  // ESSE AULA 34
   authenticate({inSignIn, provider, user}: AuthOptions): Promise<auth.UserCredential>{
     let operation: Promise<auth.UserCredential>;

   if(provider == AuthProvider.Email){
       operation = this.signInWithEmail(user);
     }else {
       operation = inSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
     };
      
     return operation;
   }
   signInWithPopup(provider: never): Promise<auth.UserCredential> {
   throw new Error("Method not implemented.");
   }
  //  ESSE

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private signInWithEmail({ email, password }: User): Promise<auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }


  private signUpWithEmail({ email, password, name }: User): Promise<auth.UserCredential>{
    return this.afAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then(credentials => 
      credentials.user
      .updateProfile({ displayName: name, photoURL: null})
      .then(() => credentials)
    );
  }

}
