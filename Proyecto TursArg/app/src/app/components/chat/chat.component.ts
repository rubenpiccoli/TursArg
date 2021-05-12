import { ConsultasMailService } from 'src/app/services/consultas-mail.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import swal from 'sweetalert2';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public service: ConsultasMailService) { }

  ngOnInit(): void {
    this.resetForm();

  }

  onSubmit(form: NgForm) {

    this.insertRecord(form);


  }

  insertRecord(form: NgForm) {
    this.service.nuevaConsulta(form.value).subscribe(res => {
      swal.fire('Gracias', 'Consulta registrada correctamente, ¡Te responderemos a la brevedad!', 'success');
      this.resetForm();

    });
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      // idConsulta: ,
      Nombre_Apellido: '',
      // telefono: '',
      email: '',
      Mensaje: '',
      motivoConsulta: ''
    };
  }



}
