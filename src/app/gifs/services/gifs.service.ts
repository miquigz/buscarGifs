import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey:string = 'SMwBofVmh3U66OSfa3HzEKejBdet4JFY';

  get history(){
    return [...this._history]; //Rompemos la relacion
  }


  constructor( private http:HttpClient ) { }


  //nos aseguramos de que tenga algun valor por defecto
  buscarGifs(query:string = ''){
    //almacenamos todas las busquedas en lowerCase.
    query = query.trim().toLocaleLowerCase();

    if(query.trim().length === 0){
      return;
    }
    if( !this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    console.log(this._history); 
  }

  
}
