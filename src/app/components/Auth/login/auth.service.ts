import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private afs:AngularFirestore) { }

  async login(email:string, password:string){
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email,password);
      return user;
    }
    catch(error){
      console.log(error);
    }
  }

}
