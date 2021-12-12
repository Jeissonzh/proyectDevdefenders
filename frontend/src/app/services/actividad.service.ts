import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private httpClient: HttpClient) { }

  getAllActividades(){
    return this.httpClient.get("http://localhost:3000/actividades/")
  }

  postCreateActividad(actividad: any){
    return this.httpClient.post("http://localhost:3000/actividades/",actividad,{headers: {"Content-Type": "application/json"} })
  }

  deleteGuitar(branch:string,model:string){
    return this.httpClient.delete("http://localhost:3000/actividades/")
  }

}
