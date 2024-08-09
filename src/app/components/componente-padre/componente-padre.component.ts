import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from 'src/app/services/servicio-familiar/servicio-familiar.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {

  // Atributos

  // mensajePadre : string = "mensaje desde el padre."; 
  mensajeRecibido: string = '';
  valorContador: number = 0;
  nombreHermano? : string = '';
  fecha?: Date = new Date();

  constructor(private _servicioFamiliar: ServicioFamiliarService) {

  }

  // Tambien se puede inyectar el servicio con

  _servicioFamiliar2 = inject(ServicioFamiliarService);

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this._servicioFamiliar.setHermanoMayor('Panchito');
    this.nombreHermano = this._servicioFamiliar.getHermanoMayor();
  }

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor());
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
