import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @ViewChild('inputBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) { }

  public buscar():void{
    // console.log(event.target.value)
    this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value)
    // this.gifsService.buscarGifs(event.target.value);

    this.txtBuscar.nativeElement.value = '';
    //"vaciamos" input
  
  }

}