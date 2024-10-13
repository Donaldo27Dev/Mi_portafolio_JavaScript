import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  standalone: true,
  imports: [],
  templateUrl: './saludador.component.html',
  styleUrl: './saludador.component.css'
})
export class SaludadorComponent {
  mensaje: String = "";

  saludar(){
    this.mensaje = "Hola Angel, nice to meet you!!!!";
  }
}
