import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins()
declare const gapi:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame:boolean = false
  email:string
  auth2:any

  constructor( public router:Router, public usuarioService:UsuarioService) { }

  googleInit(){
    gapi.load('auth2',() => {
      this.auth2 = gapi.auth2.init({
        client_id: '605548186114-u1n747k6j8h9am80nr9ghisj1prblh3g.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope: 'profile email'
      })
    })

    this.attachSignin(document.getElementById('btn-google'))
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element,{},(googleUser) => {
      // let profile = googleUser.getBasicProfile()
      let token = googleUser.getAuthResponse().id_token
      this.usuarioService.loginGoogle(token).subscribe( () => window.location.href='#/dashboard')
    })
  }


  ngOnInit(): void {
    init_plugins()
    this.googleInit()

    this.email = localStorage.getItem('email') || ''
    if(this.email.length > 0){
      this.recuerdame = true
    }

  }



  ingresar(formulario:NgForm){
    if(formulario.invalid){
      return
    }
    let usuario = new Usuario(null,formulario.value.email,formulario.value.password)
    this.usuarioService.login(usuario,formulario.value.recuerdame).subscribe(res => this.router.navigate(['/dashboard']))
  }

}
