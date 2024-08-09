import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';
import { ComponenteContadorComponent } from './components/componente-contador/componente-contador.component';
import { ComponenteTioComponent } from './components/componente-tio/componente-tio.component';
import { FormsModule } from '@angular/forms';
import { EstiloHermanosDirective } from './directives/directiva-hermanos/estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './pipes/mi-pipe-personalizado/mi-pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    ComponenteContadorComponent,
    ComponenteTioComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
