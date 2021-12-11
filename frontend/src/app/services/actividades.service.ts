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

  postCrearActividad(actividades: any){
    return this.httpClient.post("http://localhost:3000/actividades/",actividades)
  }

  deleteActivity(branch:string,model:string){

  }

}
