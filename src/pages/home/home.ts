import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre;
  telefono;
  comentario;
  toggleStatus;
  email;
  validation_messages;

  formGroup:FormGroup;
  

  constructor(public navCtrl: NavController, public formBuilder:FormBuilder) {
    this.formGroup = new FormGroup({
      nombre:new FormControl('',Validators.required),
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      telefono: new FormControl('',Validators.required),
      comentario:new FormControl('',Validators.required),
      toggleStatus:new FormControl(true,Validators.pattern('true')),
    });
    this.validation_messages = {
      'nombre':[
        { type: 'required', message: 'Name is required.' }
      ],
      'email':[
        { type: 'required', message: 'email is required.' }
      ],
      'telefono':[
        { type: 'required', message: 'telefono is required.' },
        { type: 'pattern', message: 'email is wrong'}
      ],
    }
  }

  gotoWelcome() {
    if (this.toggleStatus == true) {
      let data = {
        nombre: this.nombre,
        telefono: this.telefono,
        comentario: this.comentario,
        email: this.email,
      };
      this.navCtrl.push(WelcomePage, data);
    }
    else {
      //alert("Debe aceptar los términos y condiciones...");
    }
  }

}
