import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public service: UsuariosService) { }

  ngOnInit(): void {
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
      mail: ''
    };
  }

  onSubmit(form: NgForm) {

    this.insertRecord(form);

    // alert("Felicidades, has sido registrad@");
  }

  insertRecord(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(res => {

      this.resetForm(form);

    });
  }

}


