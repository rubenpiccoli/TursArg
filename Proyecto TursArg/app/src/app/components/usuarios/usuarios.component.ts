import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public service: UsuariosService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      idUsuario: 0,
      urlFotoUsuario: '',
      nombreUsuario: '',
      nombre: '',
      apellido: '',
      contrasenia: '',
      // telefono: '',
      // rolAdmin: '',
      mail: ''
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
