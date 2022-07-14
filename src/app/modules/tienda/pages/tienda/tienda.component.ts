import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el padre jua jua...', event);
     this.listResults$ = this.searchService.searchTracks$(event)

  }
}
