import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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