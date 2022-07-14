import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
// import { setTimeout } from 'timers';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> =
    new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement  //reproductor
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');

  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  public volumenPercentage$: BehaviorSubject<number> = new BehaviorSubject(100);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {

      if (responseOk) {

        this.setAudio(responseOk);


      }


    })
    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calcularTiempo, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)


  }
  private setVolumen = () => {

  }

  private calcularTiempo = () => {


    const { duration, currentTime, volume } = this.audio;
    // console.log('volumen:: ',volume);

    this.setTimeElapsed(currentTime);
    this.setTimeRemainin(currentTime, duration)
    this.setPercentage(currentTime, duration);
    // setTimeout(()=>{
    //   this.audio.volume = 0
    // },3500)

  }

  private setPercentage(currentTime: number, duration: number): void {
    //duraccion es el 100%
    //currentime es el porcentaje actual

    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }
  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); //1 o 2

    let minutes = Math.floor(currentTime / 60) % 60;

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;//
    const displayMinute = (seconds < 10) ? `0${minutes}` : minutes;//

    const displayFormat = `${displayMinute}:${displaySeconds}`

    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemainin(currentTime: number, duration: number): void {
    //
    let timeleft = duration - currentTime;

    let seconds = Math.floor(timeleft % 60); //1 o 2

    let minutes = Math.floor(timeleft / 60) % 60;

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;//
    const displayMinute = (seconds < 10) ? `0${minutes}` : minutes;//
    const displayFormat = `${displayMinute}:${displaySeconds}`

    this.timeRemaining$.next(displayFormat);

  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {//playing
      case 'play':
        this.playerStatus$.next('play');

        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }

  }
  //funciones publicas
  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public togglePlayer(): void {

    (this.audio.paused) ? this.audio.play() : this.audio.pause()


  }

  public seekAudio(percentage: number): void {

    const { duration } = this.audio;
    // console.log(`duracion ${duration} porcentaje : ${percentage}`);

    const percentageToSecond = (percentage * duration) / 100;

    // console.log(`${percentageToSecond}`);
    this.audio.currentTime = percentageToSecond;

  }
  public ctrlVolume(percentage: number): void {

    console.log(`llego el volumen ${percentage}`);


    let volumen: number = 0.1;
    if (percentage <= 0) {
      volumen = 0;
    }
    else if (percentage >0 && percentage <= 10) {
      volumen = 0.1;
    } else if (percentage > 10 && percentage <= 20) {
      volumen = 0.2;
    }
    else if (percentage > 20 && percentage <= 30) {
      volumen = 0.3;
    }
    else if (percentage > 30 && percentage <= 40) {
      volumen = 0.4;
    }
    else if (percentage > 40 && percentage <= 50) {
      volumen = 0.5;
    }
    else if (percentage > 50 && percentage <= 60) {
      volumen = 0.6;
    }
    else if (percentage > 60 && percentage <= 70) {
      volumen = 0.7;
    }
    else if (percentage > 70 && percentage <= 80) {
      volumen = 0.8;
    }
    else if (percentage > 80 && percentage <= 90) {
      volumen = 0.9;
    }
    else {
      volumen = 1;
    }



    // console.log(volumen);

    this.audio.volume = volumen;
    this.volumenPercentage$.next(percentage);
  }



}


//dato que emite eventos
  // callback: EventEmitter<any> = new EventEmitter<any>();

  // myObservable1$:BehaviorSubject<any> = 
  // new BehaviorSubject('h2o')

  // Subject<any> = new Subject()
  //Observable<any> = new Observable();
 // this.myObservable1$.next('envie agua pue..')
    // this.myObservable1$ = 
    // new Observable((observer:Observer<any>)=>{
    //   observer.next('enviando ....... agua ')
    // })

