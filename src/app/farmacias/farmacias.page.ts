import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.page.html',
  styleUrls: ['./farmacias.page.scss'],
})
export class FarmaciasPage  {

  constructor(private router:Router) { }

  atras(){
    this.router.navigate(['/home']);
  }

 

}
