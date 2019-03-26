import { Injectable } from '@angular/core';
import { Promocion } from './modelo.promociones';


@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  private __Promociones:Promocion[]=[
    {
      imgUrl: '/assets/farmacia1.jpeg'
    },
    {
      imgUrl:'/assets/farmacia2.jpeg'
    },
    {
      imgUrl:'/assets/farmacia3.jpeg'
    },
    {
      imgUrl:'/assets/farmacia4.jpeg'
    }
  ]

  constructor() { }
  getallPromociones(){
    return[...this.__Promociones];
  }
}
