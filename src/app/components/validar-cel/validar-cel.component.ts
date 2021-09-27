import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-validar-cel',
  templateUrl: './validar-cel.component.html',
  styleUrls: ['./validar-cel.component.less']
})
export class ValidarCelComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
