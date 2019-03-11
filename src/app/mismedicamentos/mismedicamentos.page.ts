import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mismedicamentos',
  templateUrl: './mismedicamentos.page.html',
  styleUrls: ['./mismedicamentos.page.scss'],
})
export class MismedicamentosPage implements OnInit {

  constructor(private router:Router) { }

  irHome(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
