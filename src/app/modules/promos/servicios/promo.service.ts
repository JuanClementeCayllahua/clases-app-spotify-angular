import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import {
  Subscription, Observable, of, map, tap, catchError
} from 'rxjs';
// import * as dataRaw  from "../../../data/tracks.json";
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PromoService {
  // dataTracksTrending$:Observable<TrackModel[]> = of([])
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {


  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data;
        }),
        tap(({ data }: any) => console.log(data)),
        catchError((err) => {
          console.log('error en service p ', err);
          return of([])

        })


      )
  }

}
