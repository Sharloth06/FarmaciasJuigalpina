import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'mismedicamentos',
    loadChildren: './mismedicamentos/mismedicamentos.module#MismedicamentosPageModule' 
  },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'farmacias', loadChildren: './farmacias/farmacias.module#FarmaciasPageModule' },
  { path: 'promociones', loadChildren: './promociones/promociones.module#PromocionesPageModule' },
  { path: 'informacionfarmacias', loadChildren: './informacionfarmacias/informacionfarmacias.module#InformacionfarmaciasPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
