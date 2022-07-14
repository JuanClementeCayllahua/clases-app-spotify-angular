import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  // {path:'',
  //  component
  // },
  {
    path:'promos',
    loadChildren:()=> import(`@modules/promos/promos.module`).then(m=>m.PromosModule)
  },
  {
    path:'favorites',
    loadChildren:()=>import(`@modules/favorite/favorite.module`).then(m=>m.FavoriteModule)
  },
  {
    path:'tienda',
    loadChildren:()=> import(`@modules/tienda/tienda.module`).then(m=>m.TiendaModule)
  },
  {
    path:'**',//404
    redirectTo:'/promos'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
