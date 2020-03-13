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
      Authorization: 'Bearer BQBBuAyw1AWQBqbX1Eo67M_6Nr8hnrB3aV6QMhvMGx3uVPU36yf0Ykl0b9PQQLAXIPOGf6ujYXjCbr8Lht0'
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
