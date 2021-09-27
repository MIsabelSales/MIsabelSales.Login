import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*setTimeout(()=>{
      this.captchaCreator();
    },200);*/
  }
  async login(user: string, pass: string) {
    try {
      const validacion = await this.auth.login(user, pass);
      if(validacion && validacion.user?.emailVerified){
        this.router.navigate(['/codigo-cel']);

      }else if(validacion){
        this.router.navigate(['/enviar-email']);
        this.auth.verificarCorreo();
      }else{
        this.router.navigate(['/register']);
      }
      /*
      if (validacion) {
        this.router.navigate(['/dashboard']);
      }*/
    } catch (e: any) {
      alert(e.message);
    }
  }
  async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
    } catch (e: any) {
      alert(e.message);
    }
  }

  //crear captcha
  /*captchaCreator(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');//lugar donde aparecera
    window.recaptchaVerifier.render();
  }

  mandarCodigo(numero:string){
    this.auth.mandarCodigo(numero,window.recaptchaVerifier);//manda el numero y todo el captcha ya verificado
  }*/

}
