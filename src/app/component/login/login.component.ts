import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel,} from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isrecuperarview: boolean = false;  // Vista de recuperación desactivada
  isnocredencialview: boolean = false;  // Vista de no credenciales desactivada
  isSuccessView: boolean = false;  // Variable para controlar la vista de éxito
  userayudaObj: any = {
    EmailId: ''
  };

  // Función para mostrar la vista de recuperación de contraseña
  showRecoverView() {
    this.isrecuperarview = true;
    this.isnocredencialview = false;
  }

  // Función para mostrar la vista de no tener credenciales
  showNoCredentialsView() {
    this.isrecuperarview = false;
    this.isnocredencialview = true;
  }

  // Función para manejar el envío del formulario de recuperación o no tener credenciales
  onSubmitRecovery() {
    // Aquí se puede agregar la lógica para enviar la solicitud (como una llamada API)
    // Cambiamos el estado para mostrar el mensaje de éxito
    this.isSuccessView = true;  // Mostrar el mensaje de éxito
    this.isrecuperarview = false;  // Ocultar la vista de recuperación
    this.isnocredencialview = false;  // Ocultar la vista de no credenciales
  }
}