import { Component, OnInit } from '@angular/core';
import { ConsultasMailService } from 'src/app/services/consultas-mail.service';
import { AbstractControl, FormControl, FormGroup, NgForm, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import swal from 'sweetalert2';



@Component({
  selector: 'app-consultas-dashboard',
  templateUrl: './consultas-dashboard.component.html',
  styleUrls: ['./consultas-dashboard.component.css']
})
export class ConsultasDashboardComponent implements OnInit {

  consulta: any[];

  constructor(public service: ConsultasMailService) { }

  ngOnInit(): void {
    this.listarConsultas2();
  }

  listarConsultas2() {
    this.service.listarConsultas().subscribe(data => {
      this.consulta = data;
    })

  }

}
