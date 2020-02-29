import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
  }

  getNewRelease() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQDE7jjHUICkKAoMZfz7cH3rn5s5ULaraU2w8NXHnM0cJNHVi0LJoEemLPvyWXlkHAevLHIoS2rGVciAPHE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( (data: any) => {
                      return data.albums.items;
                    }));

  }

  searchArtist(artista) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQDE7jjHUICkKAoMZfz7cH3rn5s5ULaraU2w8NXHnM0cJNHVi0LJoEemLPvyWXlkHAevLHIoS2rGVciAPHE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ artista }&type=artist`, { headers })
                    .pipe( map( (data: any) => {
                      return data.artists.items;
                    }));
  }
}
