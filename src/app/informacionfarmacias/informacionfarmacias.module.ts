import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacionfarmaciasPage } from './informacionfarmacias.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionfarmaciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacionfarmaciasPage]
})
export class InformacionfarmaciasPageModule {}
