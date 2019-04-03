import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.page.html',
  styleUrls: ['./promo.page.scss'],
})
export class PromoPage  {

  constructor(private router:Router) {}
     
  Atras() {

    this.router.navigate(["/promociomes"])
  }

  
}
