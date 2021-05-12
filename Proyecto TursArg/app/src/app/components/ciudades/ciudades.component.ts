import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Ciudades } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  filtro = '';
  ciudad: any[];
  formData: Ciudades;
  constructor(private service: CiudadesService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.listarciudades();
  }

  listarciudades() {
    this.service.listaCiudades().subscribe(data => {
      this.ciudad = data;
      //console.log('klllk', data);
    })

  };
  //////////Muetra en el Modal los datos de Ciudad /////// 
  premodificarciudad(formData: Ciudades): void {
    this.service.formData = Object.assign({}, formData);
  }

  ////////////////borrar Ciudad /////////////////
  borrarCiudad(formaData: Ciudades) {
    let id = formaData.idCiudad
    swal.fire({
      title: 'Estas Seguo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.borrarCiudad(id).subscribe(res => {
          swal.fire(
            '¡Eliminada!',
            'La Ciudad ha sido eliminada.',
            'success'
          )
          location.reload()
        })
      }
    })
  }
}







