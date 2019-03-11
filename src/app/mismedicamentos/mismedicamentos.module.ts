import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MismedicamentosPage } from './mismedicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MismedicamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MismedicamentosPage]
})
export class MismedicamentosPageModule {}
