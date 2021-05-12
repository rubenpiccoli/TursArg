import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  Perfil: string;
  constructor(private cookieToken: CookieService, private router: Router) {
    this.Perfil = this.cookieToken.get('Token');
    console.log('perofiltoken', this.Perfil);
  }

  ngOnInit(): void {
  }

  Cerrarsession() {
    this.cookieToken.delete('Token')
    this.router.navigate(['/index']);


  }

}
