import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromosPageComponent } from './page/promos-page/promos-page.component';

const routes: Routes = [
  {
    path: '',
    component: PromosPageComponent,
    // outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class PromosRoutingModule { }
