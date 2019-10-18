import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'produtor', loadChildren: './produtor/produtor.module#ProdutorPageModule' },
  { path: 'fazendas', loadChildren: './fazendas/fazendas.module#FazendasPageModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'racas', loadChildren: './racas/racas.module#RacasPageModule' },
  { path: 'tipomanejo', loadChildren: './tipomanejo/tipomanejo.module#TipomanejoPageModule' },
  { path: 'apartes', loadChildren: './apartes/apartes.module#ApartesPageModule' },
  { path: 'fichaanimal', loadChildren: './fichaanimal/fichaanimal.module#FichaanimalPageModule' },
  { path: 'manejo', loadChildren: './manejo/manejo.module#ManejoPageModule' },
  { path: 'edit-contact', loadChildren: './edit-contact/edit-contact.module#EditContactPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
