import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
// import * as dataRaw  from "../../../../data/tracks.json";
import { PromoService } from '../../servicios/promo.service';
// import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-promos-page',
  templateUrl: './promos-page.component.html',
  styleUrls: ['./promos-page.component.css']
})
export class PromosPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<any> = []
  constructor(private trackService: PromoService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();

  }

 async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

      // .then(res => { })
      // .catch(err => {
      //   console.log('error de conexion');
        
      //  })


    // .subscribe((response: TrackModel[]) => {
    //   this.tracksTrending = response
    //   this.tracksRandom = response
    // })
  }

  loadDataRandom():void{
    this.trackService.getAllTracks$()
    .subscribe(
      (response:TrackModel[])=>{
        this.tracksRandom = response
      },error=>{
        console.log('error de conexionn...');
        
      }
    )
  }

  ngOnDestroy(): void {

  }

}
