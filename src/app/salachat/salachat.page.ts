import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-salachat',
  templateUrl: './salachat.page.html',
  styleUrls: ['./salachat.page.scss'],
})
export class SalachatPage {

  constructor(private router:Router) { }
  Atras() {

    this.router.navigate(["/buzondesugerencias"])
  }

  

}
