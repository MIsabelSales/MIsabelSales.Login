import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.less'],

})

export class EnviarEmailComponent implements OnInit {
  //public usuario$: Observable<any> = this.authSvc.auth.user;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
