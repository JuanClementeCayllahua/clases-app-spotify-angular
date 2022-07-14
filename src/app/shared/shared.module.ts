import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component'; 
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SeccionGenericaComponent } from './components/seccion-generica/seccion-generica.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { ImgBrokenDirective } from './directivas/img-broken.directive';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SeccionGenericaComponent,
    OrderListPipe,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    ImgBrokenDirective, 
  ],
  imports: [
  
  CommonModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SeccionGenericaComponent, 
    OrderListPipe,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    ImgBrokenDirective,
  ]
})
export class SharedModule { }
