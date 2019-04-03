import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-masproductos',
  templateUrl: './masproductos.page.html',
  styleUrls: ['./masproductos.page.scss'],
})
export class MasproductosPage  {

  constructor(private router: Router ) { }


   Atras() {

    this.router.navigate(["/productos"])
  }

}
