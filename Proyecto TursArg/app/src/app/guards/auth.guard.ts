import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UsuariosService} from 'src/app/services/usuarios.service';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  Token: string;
  datosUsuario:any[];
  rolAdmin:boolean;
  constructor(private service:UsuariosService, private router:Router,private cookieToken: CookieService){}
  ////esto se hce para dar seguridad al las rutas sino esta logado con el mismo token guardo /// no te deja entrar////
 
  redirect(flag:boolean):any{
    if(!flag){
      this.router.navigate(['/login'])
    }
  }
 
 
  canActivate(
 next:ActivatedRouteSnapshot,
 State:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
  
      const Token = this.cookieToken.check('Token');
      
      this.redirect(Token)
      return Token;
 }
      //this.service.selecionarUsuario(this.Token).subscribe(data=>{
      //this.datosUsuario = data[0];
     

     // this.rolAdmin=data[0].rolAdmin;
     // console.log('RollAdmin',this.rolAdmin)
     
   // })
    //if (this.rolAdmin==true){
     
     // return true;
    
    
    //}
   
    
  
  
}
