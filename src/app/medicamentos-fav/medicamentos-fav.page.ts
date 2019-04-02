import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medicamentos-fav',
  templateUrl: './medicamentos-fav.page.html',
  styleUrls: ['./medicamentos-fav.page.scss'],
})
export class MedicamentosFavPage {

  constructor(private router: Router) { }

 Atras() {

    this.router.navigate(["/mismedicamentos"])
  }


}
