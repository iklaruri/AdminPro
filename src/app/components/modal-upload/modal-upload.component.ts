import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from 'src/app/services/subirArchivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [
  ]
})
export class ModalUploadComponent implements OnInit {

  imagenSubir:File;
  imagenTemp:string | ArrayBuffer;

  constructor(public subirArchivoService:SubirArchivoService, public modalUploadService:ModalUploadService) { }

  ngOnInit(): void {
  }

  seleccionarImagen(archivo:File){
    if(!archivo){
      this.imagenSubir=null;
      return;
    }

    if(archivo.type.indexOf('image') < 0){
      Swal.fire({
        title:'Sólo imágenes',
        text:'El archivo seleccionado no es una imagen',
        icon:'error'
      });
      this.imagenSubir=null;
      return;
    }
    this.imagenSubir=archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  subirImagen(){
    this.subirArchivoService.subirArchivo(this.imagenSubir,this.modalUploadService.tipo,this.modalUploadService.id)
      .then(res => {
        this.modalUploadService.notificacion.emit(res);
        this.cerrarModal();
      })
      .catch(err => {
        Swal.fire({
          title:'Imagen',
          text:'no actualizada',
          icon:'error'
        })
        return false;
      });
  }

  cerrarModal(){
    this.imagenSubir = null;
    this.imagenTemp = null;
    this.modalUploadService.ocultarModal();
  }

}
