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
  { path: 'informacionfarmacias', loadChildren: './informacionfarmacias/informacionfarmacias.module#InformacionfarmaciasPageModule' },  { path: 'acerca-de-nosotros', loadChildren: './acerca-de-nosotros/acerca-de-nosotros.module#AcercaDeNosotrosPageModule' },
  { path: 'medicamentos-fav', loadChildren: './medicamentos-fav/medicamentos-fav.module#MedicamentosFavPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'medicamentos', loadChildren: './medicamentos/medicamentos.module#MedicamentosPageModule' },
  { path: 'nosotros', loadChildren: './nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'masproductos', loadChildren: './masproductos/masproductos.module#MasproductosPageModule' },
  { path: 'promo', loadChildren: './promo/promo.module#PromoPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
