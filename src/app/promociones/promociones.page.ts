import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage  {

  constructor(private router: Router) {}
     
  Atras() {

    this.router.navigate(["/mis medicamentos"])
  }

   }
