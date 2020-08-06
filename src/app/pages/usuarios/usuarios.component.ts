import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];
  desde:number = 0;
  totalRegistros:number = 0;
  cargando:boolean = true;


  constructor(public usuarioService:UsuarioService, public modalUploadService:ModalUploadService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.modalUploadService.notificacion.subscribe(res => this.cargarUsuarios());
  }

  mostrarModal(id:string){
    this.modalUploadService.mostrarModal('usuario',id);
  }

  cargarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde).subscribe( (res:any) => {
      this.totalRegistros = res.total;
      this.usuarios = res.usuarios;
      this.cargando = false;
    });
  }

  cambiarDesde(valor:number){
    let desde = this.desde + valor;

    if(desde >= this.totalRegistros){
      return;
    }

    if(desde < 0){
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino:string){
    if(termino.length <= 0){
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this.usuarioService.buscarUsuario(termino).subscribe( (usuarios:Usuario[]) => {
      this.usuarios = usuarios;
      this.cargando = false;
    });
  }

  eliminarUsuario(usuario:Usuario){
    if(usuario._id === this.usuarioService.usuario._id){
      Swal.fire({
        title:'No puede eliminar usuario',
        text:'No se puede eliminar a si mismo',
        icon:'error'
      });
      return;
    }

    Swal.fire({
      title: '¿Está seguro?',
      text: "Esta a punto de eliminar a " + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminarlo'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminarUsuario(usuario._id).subscribe(res => {
          this.cargarUsuarios();
        });
        Swal.fire(
          'Eliminado!',
          'El ' + usuario.nombre + ' se ha eliminado',
          'success'
        )
      }
    });
  }

  actualizarUsuario(usuario:Usuario){
    this.usuarioService.actualizarUsuario(usuario).subscribe();
  }

}
