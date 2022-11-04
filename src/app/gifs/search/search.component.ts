import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor() { }

  @ViewChild('inputBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  public mostrar():void{
    
  }

  public buscar( event:any):void{
    // console.log(event.target.value)
    // console.log(this.txtBuscar);
    this.txtBuscar.nativeElement.value = '';
    //"vaciamos" input
  
  }

}