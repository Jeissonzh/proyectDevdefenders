import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActividadService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  allActividades: any;
  tareas:any;

  actividad: any = {
    correo:"",
    nombre: "",
    estado: "",
    fechaInicio:"",
    fechaEnProgreso:"",
    fechaFinalizado:"",
    perfil:"",
    tarea:"",
  }

  constructor(private actividadService: ActividadService) { 
    
  }

  ngOnInit(): void {
    this.allActividades = []
    this.getAllActividades()
  }

  getAllActividades(){
    this.actividadService.getAllActividades().subscribe((actividades)=>{
      this.allActividades = actividades
    })
  }

  saveGuitar(): void{
    if(this.actividad.correo && this.actividad.nombre && this.actividad.estado && this.actividad.perfil && this.actividad.tarea){
      this.actividadService.postCrearActividad(this.actividad).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          console.log("error");
        }else{
          document.getElementById("btnAddTarea")?.click()
          this.getAllActividades()
        }
      })
    }else{
      alert('Faltan campos por llenar');
    }
  }
}
