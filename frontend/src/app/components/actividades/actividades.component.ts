import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/services/actividad.service';
import { ToastrService } from 'ngx-toastr';
//mongodb+srv://<username>:<password>@mongotest.5bspg.mongodb.net/test
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  allActividades: any;
  allUsers: any;

  actividad: any = {
    correo: "",
    estado: "",
    fechaEnProgreso: "",
    fechaFinalizado: "",
    fechaInicio: "",
    nombre: "",
    perfil: "",
    tarea: ""
  }

  constructor(private actividadService: ActividadService, private toastr: ToastrService) {
    this.allUsers = ["Camila", "Jeisson", "David"]
  }

  ngOnInit(): void {
    this.allActividades = []
    this.getAllActividades()
  }

  getAllActividades() {
    this.actividadService.getAllActividades().subscribe((actividad) => {
      this.allActividades = actividad
    })
  }

  saveActividad(): void {
    if (this.actividad.nombre && this.actividad.correo && this.actividad.estado && this.actividad.perfil && this.actividad.tarea) {
      this.actividadService.postCreateActividad(this.actividad).subscribe((respuesta) => {
        if ((respuesta as any).type == "error") {
          this.toastr.error((respuesta as any).msg, 'Error!');
        } else {
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.getAllActividades()
        }
      })
    } else {
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
  }
}
