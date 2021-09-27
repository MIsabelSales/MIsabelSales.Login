import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-codigo-cel',
  templateUrl: './codigo-cel.component.html',
  styleUrls: ['./codigo-cel.component.less']
})
export class CodigoCelComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.captchaCreator();
    },200);
  }
  captchaCreator() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');//lugar donde aparecera
    window.recaptchaVerifier.render();
  }

  mandarCodigo(numero: string) {
    this.auth.mandarCodigo(numero, window.recaptchaVerifier);//manda el numero y todo el captcha ya verificado
  }
}
