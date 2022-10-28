import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
// import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, from, map, Observable, of, pipe} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  //current user variable
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) {}


  signUp( email: any, password: any) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: any, password: any): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }

  // emailexists(email: any):Observable<boolean> {
  //   return of(email).pipe(
  //     delay(500),
  //     map((email) => {
  //       const emails = [this.auth, email , this.auth,!email];
  //       return emails.includes(email);
  //     })
  //   );
  // }

  // uniqueEmailValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     return this.emailexists(control.value).pipe(
  //       map((exists) => (exists ? { emailexists: true } : null)),
  //       catchError(async () => null)
  //     );
  //   };
  // }
}
