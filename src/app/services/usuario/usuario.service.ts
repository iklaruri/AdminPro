import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario
  token:string

  constructor(public http:HttpClient, public router:Router, public subirArchivoService:SubirArchivoService) {
    this.cargarStorage()
  }

  crearUsuario(usuario:Usuario){
    let url = URL_SERVICIOS + '/usuario'
    return this.http.post(url,usuario).pipe(map((res:any) => {
      Swal.fire({
        title:'Usuario creado',
        text:usuario.email,
        icon:'success'
      })
      return res.usuario
    }))
  }

  actualizarUsuario(usuario:Usuario){
    let url = URL_SERVICIOS + '/usuario/' + usuario._id
    url += '?token=' + this.token
    return this.http.put(url,usuario).pipe(map((res:any)=> {
      this.guardarStorage(res.usuario._id,this.token,res.usuario)
      Swal.fire({
        title:'Usuario actualizado',
        text:usuario.nombre,
        icon:'success'
      })
      return true
    }))
  }

  cambiarImagen(archivo:File,id:string){
    this.subirArchivoService.subirArchivo(archivo,'usuario',id)
            .then( (res:any) =>{
              this.usuario.img = res.usuario.img
              Swal.fire({
                title:'Imagen actualizado',
                text:this.usuario.nombre,
                icon:'success'
              })
              this.guardarStorage(id,this.token,this.usuario)
            })
            .catch( res => {
              Swal.fire({
                title:'Imagen',
                text:'no actualizada',
                icon:'error'
              })
              return false
            })
  }

  login(usuario:Usuario,recuerdame:boolean=false){
    if(recuerdame){
      localStorage.setItem('email',usuario.email)
    }else{
      localStorage.removeItem('email')
    }

    let url = URL_SERVICIOS + '/login'
    return this.http.post(url,usuario).pipe(map((res:any) => {
      this.guardarStorage(res.id,res.token,res.usuario)
      return true
    }))
  }

  loginGoogle(token:string){
    let url = URL_SERVICIOS + '/login/google'
    return this.http.post(url,{token}).pipe(map((res:any) => {
      this.guardarStorage(res.id,res.token,res.usuario)
      return true
    }))
  }

  logout(){
    this.usuario = null
    this.token = ''

    localStorage.removeItem('token')
    localStorage.removeItem('usuario')

    this.router.navigate(['/login'])
  }

  estaLogeado(){
    return(this.token.length > 0)?true:false
  }

  guardarStorage(id:string,token:string,usuario:Usuario){
    localStorage.setItem('id',id)
    localStorage.setItem('token',token)
    localStorage.setItem('usuario',JSON.stringify(usuario))

    this.usuario = usuario
    this.token = token
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }else{
      this.token=''
      this.usuario=null
    }
  }

}
