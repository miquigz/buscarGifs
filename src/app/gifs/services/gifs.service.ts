import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey:string = 'SMwBofVmh3U66OSfa3HzEKejBdet4JFY';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  public results: Gif[] = [];

  get history(){
    return [...this._history]; //Rompemos la relacion
  }

  constructor( private http:HttpClient ) { 
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    // this.http.get(endpoint-url-a-pedir-el-get)
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( (response)=>{
      this.results = response.data;
      localStorage.setItem('results', JSON.stringify( this.results )  );
    })  
  }

}
