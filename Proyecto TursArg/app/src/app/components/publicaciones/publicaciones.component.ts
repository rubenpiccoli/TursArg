import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  Perfil:string;
  id:any;
  TEMA:string;
  idUser:any;
  publicaciones:any;
  usuarios:any;
  Nombre: string;
  Apellido:string;
  fecha:any;

  form:FormGroup=this.formBuilder.group({
    idPublicacion: [0],
    fechaPublicacion:[''],
    textoPublicacion: ['',Validators.required],
    idUserPublicacion: [0],
    idTema_publicacion:[0]
   
  });
  constructor(private service:PublicacionesService,private serviceuser:UsuariosService ,private _router:ActivatedRoute,private cookieToken: CookieService, private formBuilder:FormBuilder) { 
    console.log(this._router.snapshot.paramMap.get('id'));
   
    this.Perfil = this.cookieToken.get('Token');
   
     this.TEMA=this._router.snapshot.paramMap.get('TEMA');
     this.idUser=this._router.snapshot.paramMap.get('idUser');
     this.Nombre=this._router.snapshot.paramMap.get('nombre');
     this.Apellido=this._router.snapshot.paramMap.get('apellido');
     this.fecha=this._router.snapshot.paramMap.get('fecha');
 
    }

  ngOnInit(): void {
    this.ListarPublicaciones();
  }

  ListarPublicaciones(){
    
    this.id = this._router.snapshot.paramMap.get('id');
    console.log('iddddddddddddddd',this.id)
    this.service.ListarPublicaciones(this.id).subscribe(data => {
      this.publicaciones = data;
   
       ////// busca los usuarios para luego comparar///
    /////id de usuario con el id de tema de foro para colocar el nombre y apellido //////   
    this.serviceuser.listarusuarios().subscribe(data1 =>{
      this.usuarios=data1;
    })
  });
  }
  resetForm(form) {
    if (form != null)
    this.form.reset();
  }
  onSubmit(){
    if (this.form.invalid){
      this.form.markAllAsTouched
      }
      this.form.value.idTema_publicacion=this.id;
      this.form.value.idUserPublicacion=this.idUser;
      console.log('formularioooooo',this.form)
      this.service.postpublicaciones(this.form.value).subscribe(res => {
        swal.fire('Enhorabuena', 'Comentario enviado', 'success').then(function(){ 
          location.reload()
         });
        
        this.resetForm(this.form);
          ////cierra el Modal con el id cerrar////
        document.getElementById('cerrar').click();
      });
    }

  CampoValido(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }
}
