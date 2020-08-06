import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formulario:FormGroup;

  constructor(public usuarioService:UsuarioService, public router:Router) { }

  passwordNoIguales(campo1:string,campo2:string){
    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        passwordNoIguales: true
      };

    };
  }

  ngOnInit(): void {
    init_plugins();

    this.formulario = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, {validators: this.passwordNoIguales('password','password2')});

  }

  registrarUsuario(){
    if(this.formulario.invalid){
      return;
    }

    if(!this.formulario.value.condiciones){
      Swal.fire({
        title:'Importante',
        text:'Debe de aceptar las condiciones',
        icon:'warning'
      })
      return;
    }

    let usuario = new Usuario(
      this.formulario.value.nombre,
      this.formulario.value.email,
      this.formulario.value.password
    )

    this.usuarioService.crearUsuario(usuario).subscribe( res => this.router.navigate(['/login']));


  }

}
