import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageOfTheDay } from './common/ImageOfTheDay.model';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  public service: HttpClient;
  private key: string = 'LqKlCj1Z51EhPpNU2V48rhsrkkSYI1torYRAJBNx';
  private url: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private date: string = '&date=';

  constructor(httpClient: HttpClient) {
    this.service = httpClient;
  }

  public getImageOfTheDay(jour: string): Observable<ImageOfTheDay> {
    const obs: Observable<any> = this.service.get(
      this.url + this.key + this.date + jour
    );
    const traitement = (param: any) => {
      return param as ImageOfTheDay;
    };

    return obs.pipe(map(traitement));
  }
}
