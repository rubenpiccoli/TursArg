import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, * as JWT from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn = true;
    this.router.navigate(['/home']);



  }

  onSubmit(): void {
    this.LoginService.login(this.usuario).subscribe(
      data => {

        var decoded = jwtDecode(data);
        //this.tokenStorage.saveUser(decoded['unique_name']);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/index']);
      },
      err => {
        this.errorMessage = "Email y/o password invalidos!";
        this.isLoginFailed = true;
      }
    );
  }

}
