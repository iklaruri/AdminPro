import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  usuario:Usuario;
  imagenSubir:File;
  imagenTemp:string | ArrayBuffer;

  constructor(public usuarioService:UsuarioService) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  guardar(usuario:Usuario){
    if(!this.usuario.google){
      this.usuario.email = usuario.email;
    }
    this.usuario.nombre = usuario.nombre;
    this.usuarioService.actualizarUsuario(this.usuario).subscribe();
  }

  seleccionarImagen(archivo:File){
    if(!archivo){
      return;
    }

    if(archivo.type.indexOf('image') < 0){
      Swal.fire({
        title:'Sólo imágenes',
        text:'El archivo seleccionado no es una imagen',
        icon:'error'
      })
      this.imagenSubir=null;
      return;
    }

    this.imagenSubir=archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  cambiarImagen(){
    this.usuarioService.cambiarImagen(this.imagenSubir,this.usuario._id);
  }

}
