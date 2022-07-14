import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SearchComponent } from './compontents/search/search.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TiendaComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    SharedModule,FormsModule
  ]
})
export class TiendaModule { }
