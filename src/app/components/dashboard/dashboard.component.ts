import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [AuthService]

})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }
    public estaLogueado = false;
    public usuario: any;
  async ngOnInit() {
    this.usuario =  await this.auth;
    if(this.usuario){
      this.estaLogueado = true;
    }
  }

}
