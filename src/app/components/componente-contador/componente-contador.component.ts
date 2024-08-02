import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-contador',
  templateUrl: './componente-contador.component.html',
  styleUrls: ['./componente-contador.component.css']
})
export class ComponenteContadorComponent {

  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }
}
