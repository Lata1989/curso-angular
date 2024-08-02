import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

  // @Input() recibeHijo: string = "";

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  mensaje: string = '';

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje)
  };

  incrementar() {
    this.incrementarDesdeHijo.emit();
  };

  decrementar() {
    this.decrementarDesdeHijo.emit();

  };
}
