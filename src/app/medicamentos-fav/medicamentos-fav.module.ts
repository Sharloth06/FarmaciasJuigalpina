import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicamentosFavPage } from './medicamentos-fav.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosFavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicamentosFavPage]
})
export class MedicamentosFavPageModule {}
