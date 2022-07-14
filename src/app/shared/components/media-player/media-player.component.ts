import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
// import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  @ViewChild('progressBarVol') progressBarVol:ElementRef = new ElementRef('')

  listObserver$: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) {

  }

  handlePosition(event: MouseEvent): void {
    // console.log('... ',event);
    const elNativo: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event

    const {x, width} = elNativo.getBoundingClientRect();

    // console.log(`click x(${clientX}) inicial ${x} y ancho ${width}`);
    
    const clickX = clientX - x;//total menos la parte inicial

    const percentageFromX = (clickX*100)/width;
    

    // console.log(`clickx ${percentageFromX}`);

    this.multimediaService.seekAudio(percentageFromX);

  }

  handlePositionVol(event:MouseEvent):void{
    const elNativo: HTMLElement = this.progressBarVol.nativeElement
    const { clientX } = event

    const {x, width} = elNativo.getBoundingClientRect();

     console.log(`click x(${clientX}) inicial ${x} y ancho ${width}`);
    
    const clickX = clientX - x;//total menos la parte inicial

    const percentageVolFromX = (clickX*100)/width;

    console.log(`percentageVolFromX ${percentageVolFromX}`);

    this.multimediaService.ctrlVolume(percentageVolFromX);
    
  }
  handlePositionVolMASMIN( porcentaje: number = 100):void{
    this.multimediaService.ctrlVolume(porcentaje);
  }
  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)

    this.listObserver$ = [observer1$]

  }
  ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe);

    // console.log('ooo destruccion .... ///');

  }

}
// const observer1$: Subscription = this.multimediaService.callback.subscribe(
    //   (response: TrackModel) => {
    //     console.log('recibiendo cancion ... from card player', response); 
    //   }
    // ) 
    // this.listObserver$ = [observer1$]  //puede haber varias subscripciones en una aplicacion real
    // const Observable1$ = this.multimediaService.myObservable1$.subscribe(
    //   (responseOk)=>{
    //     //TODO: NEXT fluye todo bien

    //     console.log('el agua llega perfecto ',responseOk);

    //   },
    //   (responseFail)=>{
    //     //TODO: error
    //     console.log('el agua tiene problemas', responseFail);

    //   }
    //   )