import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';
import{CookieService} from 'ngx-cookie-service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
toke:string;
    constructor(public service: UsuariosService,private cookieToken:CookieService) { }

    ngOnInit(): void {
        this.toke=this.cookieToken.get('Token');
        console.log('tokeeeeee', this.toke)
        this.resetForm();
    }
    resetForm(form?: NgForm) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            idUsuario: 0,
            // urlFotoUsuario: '',
            nombreUsuario: '',
            nombre: '',
            apellido: '',
            contrasenia: '',
            // telefono: '',
            // rolAdmin: '',
            email: ''
        };
    }

    onSubmit(form: NgForm) {

        this.insertRecord(form);
    }

    insertRecord(form: NgForm) {
        this.service.postUsuario(form.value).subscribe(res => {

            this.resetForm(form);

        });
    }

}
