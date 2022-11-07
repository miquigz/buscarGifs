import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  constructor(private gifsService:GifsService) { }

  get history(){
    return this.gifsService.history;
  }

  buscar(termino:string){
    this.gifsService.buscarGifs(termino);
  }

}
