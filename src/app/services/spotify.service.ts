import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
  }

  getDataSpotify(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQCbnbBFHauJWLzmV1LaLZk_NegaMY5sz1sc6dYdmAoQpdTtCwrEJkRs_-DalstfaSCdboQ05-YF7MABA54'
    });

    return this.http.get( url , { headers });
  }

  getNewRelease() {

    return this.getDataSpotify('browse/new-releases')
               .pipe( map( (data: any) => {
                 return data.albums.items;
               }));

  }

  searchArtist(artista: string) {

    return this.getDataSpotify(`search?q=${ artista }&type=artist`)
               .pipe( map( (data: any) => {
                 return data.artists.items;
               }));
  }

  getArtist(id: string) {

    return this.getDataSpotify(`artists/${ id }`);

  }

}
