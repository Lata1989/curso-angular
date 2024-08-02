import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {

  // mensajePadre : string = "mensaje desde el padre."; 
  mensajeRecibido:string = '';
  valorContador: number = 0;

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

}
