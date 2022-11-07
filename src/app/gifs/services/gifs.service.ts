import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey:string = 'SMwBofVmh3U66OSfa3HzEKejBdet4JFY';

  public results: Gif[] = [];

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

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    // this.http.get(endpoint-url-a-pedir-el-get)
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe( (response)=>{
      console.log(response);
      this.results = response.data;
    })
    console.log(this._history);
  }

  
}
