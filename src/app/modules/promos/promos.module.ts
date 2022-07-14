import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PromosRoutingModule } from './promos-routing.module';
import { PromosPageComponent } from './page/promos-page/promos-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PromosPageComponent
  ],
  imports: [
    CommonModule,
    PromosRoutingModule,
    
    SharedModule
  ]
})
export class PromosModule { }
