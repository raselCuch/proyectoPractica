import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {
  formUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  validaEmail() {
    return (
      // pristine -> si no ha sido tocado
      this.formUser.get('email')?.valid || this.formUser.get('email')?.pristine
    );
  }
  validaPassword() {
    return (
      this.formUser.get('password')?.valid ||
      // pristine -> si no ha sido tocado
      this.formUser.get('password')?.pristine
    );
  }
  procesar() {
    console.log(this.formUser.value);
  }
}
