import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage  {

  constructor(private router:Router) {}
     
  Atras() {

    this.router.navigate(["/acerca de nosotros"])
  }

   }

  

