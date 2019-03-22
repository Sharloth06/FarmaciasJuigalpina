import { Component,OnInit } from '@angular/core';
import { Promocion } from './modelo.promociones';
import { PromocionesService } from './promociones.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  promociones: Promocion[];

constructor(private promo:PromocionesService){}

ngOnInit() {
  this.promociones = this.promo.getallPromociones();

  console.log(this.promociones);
 
}
}
