import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';

//crear de forma global una interface
let comprobacion=1;

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    confirmationResult: any;//confirmacion
    grecaptcha: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) {
    auth.authState.subscribe(user => {
      console.log(user);
    })
    /* this.auth.authState.subscribe(user =>{
      console.log(user);
      if(!user){

        return;
      }
      if(comprobacion==1){
        this.router.navigate(['/codigo-cel']);
      }else if(comprobacion=2){
        this.router.navigate(['/dashboard']);
      }

    }); */

  }
  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
  }
  //registrar
  async registrar(user: string, pass: string) {
    try {
        const prueba= await this.auth.createUserWithEmailAndPassword(user, pass);
        alert('Ya se encuentra registrado!');
    } catch (error) {
      alert(error);
    }

  }
  //Solo esto verificar correo
  verificarCorreo() {
    this.auth.currentUser.then(user => {
      if (user) {
        //user.sendEmailVerification();
        user.sendEmailVerification({ url: (environment.host+ 'dashboard') });

      }
    })
  }
  //Solo esto autenticar con google tipo modal
  googleAuth() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (()=>{
        this.router.navigate(['/codigo-cel']);
      })
    );

}
  //Solo esto autenticar con google cambio de pagina


  /* googleAuthRedireccion() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(
      ()=>{
        this.router.navigate(['/codigo-cel']);
        //console.log(data);
      }
    );

  } */

  googleAuthRedireccion() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(
      (()=>{
        this.router.navigate(['/codigo-cel']);
      })
    );


  }

  //cerrar sesion
  logOut() {
    try {
      this.auth.signOut();
        this.router.navigate(['/login']);
        comprobacion=1;
    } catch (e: any) {
      alert(e.message);
    }
  }
  //Enviar sms
  mandarCodigo(numero: string, appVerified: any) {
    return this.auth.signInWithPhoneNumber(numero, appVerified).then(confirmation => {
      window.confirmationResult = confirmation;
      alert("Listo!!!");
      this.router.navigate(['/validar-cel']);
    }).catch(error => {
      console.log(error);
    });
  }
  //Verificar el codigo enviado al cel
  verificarCodigo(codigo: string) {
    return window.confirmationResult.confirm(codigo).then((result: any) => {
      let credenciales = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, codigo);
      this.auth.signInWithCredential(credenciales);
      this.router.navigate(['/dashboard']);
      comprobacion=2;
    });
  }
}
