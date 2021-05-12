import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import swal from 'sweetalert2';

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
      email: ''
    };
  }

  onSubmit(form: NgForm) {

    this.insertRecord(form);


    // alert("Felicidades, has sido registrad@");
  }

  insertRecord(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(res => {
      swal.fire('Enhorabuena', 'Usuario registrado exitosamente', 'success');
      this.resetForm(form);

    });
  }

}


