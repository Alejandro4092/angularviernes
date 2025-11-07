import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personascomponent',
  standalone: true,
  templateUrl: './personascomponent.html',
  styleUrls: ['./personascomponent.css'],
  providers: [ServicePersonas]
})
export class Personascomponent implements OnInit{
  public personas!:Array<Persona>
  constructor(private _service:ServicePersonas){}


  ngOnInit(): void {
  // this._service.getPersonas().subscribe(response=>{
  //   console.log("leyendo")
  //   this.personas=response
  // })
  // this._service.getPersonasPromise().then(response=>{
  //   console.log("reading")
  //   this.personas=response
  // })
  this._service.getPersonasAxios().then(response=>{
    console.log("reading")
    this.personas=response
  })
  // this._service.getPersonasFetch().then(response=>{
  //   console.log("reading")
  //   this.personas=response
  // })
}


}
