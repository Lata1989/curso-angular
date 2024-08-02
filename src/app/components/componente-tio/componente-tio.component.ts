import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from 'src/app/services/servicio-familiar/servicio-familiar.service';

@Component({
  selector: 'app-componente-tio',
  templateUrl: './componente-tio.component.html',
  styleUrls: ['./componente-tio.component.css']
})
export class ComponenteTioComponent implements OnInit{
  constructor(private _servicioFamiliar: ServicioFamiliarService){

  }

  nombreHermano?: string = '';

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMenor('Felipe');
    this.nombreHermano = this._servicioFamiliar.getHermanoMenor();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor());
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
