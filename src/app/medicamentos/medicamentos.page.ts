import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage  {

  constructor(private router: Router) { }

  Atras() {

    this.router.navigate(["/mismedicamentos"])
  }


}
